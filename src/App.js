const MissionUtils = require('@woowacourse/mission-utils');
const Console = MissionUtils.Console;

const GAME_MESSAGE = {
  START: '숫자 야구 게임을 시작합니다.',
  INPUT_NUMBER: '숫자를 입력해주세요 : ',
  GUESS_ALL_NUMBER: '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
  RESTART_OR_END: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
  ERROR:
    '잘못된 값을 입력하셨습니다. 1~9까지의 세개의 다른 숫자를 입력해주세요',
};

class App {
  constructor() {
    this.ANSWER_NUMBER = [];
    this.USER_NUMBER = [];
    this.strikeCount = 0;
    this.ballCount = 0;
    this.isFirstPlay = true;
  }

  play() {
    if (this.isFirstPlay) {
      Console.print(GAME_MESSAGE.START);
    }
    this.createAnswerNumber();
    this.getUserNumber();
  }

  createAnswerNumber() {
    this.ANSWER_NUMBER = [];
    while (this.ANSWER_NUMBER.length < 3) {
      const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.ANSWER_NUMBER.includes(randomNumber)) {
        this.ANSWER_NUMBER.push(randomNumber);
      }
    }
  }

  getUserNumber() {
    this.USER_NUMBER = [];
    Console.readLine(GAME_MESSAGE.INPUT_NUMBER, userinput => {
      this.USER_NUMBER = userinput.split('').map(Number);
      errorCheck(userinput);
      this.compareNumbers(this.USER_NUMBER);
    });
  }

  compareNumbers(number) {
    this.strikeCount = 0;
    this.ballCount = 0;
    const user = number;
    const computer = this.ANSWER_NUMBER;

    for (let i = 0; i < 3; i++) {
      if (computer.indexOf(user[i]) !== -1 && user[i] === computer[i]) {
        this.strikeCount += 1;
      } else if (computer.indexOf(user[i]) !== -1) {
        this.ballCount += 1;
      }
    }
    this.result();
  }

  result() {
    const isThreeStrike = this.strikeCount === 3;
    const isNoting = this.strikeCount === 0 && this.ballCount === 0;
    const isBall = this.strikeCount === 0 && this.ballCount !== 0;
    const isStrike =
      this.strikeCount !== 0 && this.ballCount === 0 && this.strikeCount !== 3;
    const isStrikeAndBall =
      this.ballCount !== 0 && this.strikeCount > 0 && this.strikeCount < 3;
    if (isThreeStrike) return this.threeStrikePrint();
    if (isNoting) return this.nothingPrint();
    if (isBall) return this.ballPrint();
    if (isStrike) return this.strikePrint();
    if (isStrikeAndBall) return this.strikeAndBallPrint();
    return false;
  }

  threeStrikePrint() {
    Console.print('3스트라이크');
    Console.print(GAME_MESSAGE.GUESS_ALL_NUMBER);
    return this.askRestartOrExit();
  }

  nothingPrint() {
    Console.print('낫싱');
    return this.getUserNumber();
  }

  ballPrint() {
    Console.print(`${this.ballCount}볼`);
    return this.getUserNumber();
  }

  strikePrint() {
    Console.print(`${this.strikeCount}스트라이크`);
    return this.getUserNumber();
  }

  strikeAndBallPrint() {
    Console.print(`${this.ballCount}볼 ${this.strikeCount}스트라이크`);
    return this.getUserNumber();
  }

  askRestartOrExit() {
    Console.print(GAME_MESSAGE.RESTART_OR_END);
    Console.readLine('', userInput => {
      if (userInput === '1') {
        this.isFirstPlay = false;
        return this.play();
      }
      return Console.close();
    });
  }
}

function errorCheck(userInput) {
  const validNumber = /^[1-9]{3}$/;
  if (validNumber.test(userInput) && [...new Set(userInput)].length === 3) {
    return;
  }
  throw new Error(GAME_MESSAGE.ERROR);
}

module.exports = App;
