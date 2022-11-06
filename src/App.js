const MissionUtils = require('@woowacourse/mission-utils');

class App {
  constructor() {
    this.ANSWER_NUMBER = [];
    this.USER_NUMBER = [];
    this.strikeCount = 0;
    this.ballCount = 0;
    this.playFirstTime = true;
  }

  play() {
    if (this.playFirstTime) {
      MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
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
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', userinput => {
      this.USER_NUMBER = userinput.split('').map(Number);
      errorCheck(this.USER_NUMBER);
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
    this.threeStrikeCheck();
    this.nothingCheck();
    this.ballCheck();
    this.strikeCheck();
    this.strikeAndBallCheck();
  }

  threeStrikeCheck() {
    if (this.strikeCount === 3) {
      MissionUtils.Console.print('3스트라이크');
      MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
      return this.askRestartOrExit();
    }
    return false;
  }

  nothingCheck() {
    if (this.strikeCount === 0 && this.ballCount === 0) {
      MissionUtils.Console.print('낫싱');
      return this.getUserNumber();
    }
    return false;
  }

  ballCheck() {
    if (this.strikeCount === 0 && this.ballCount !== 0) {
      MissionUtils.Console.print(`${this.ballCount}볼`);
      return this.getUserNumber();
    }
    return false;
  }

  strikeCheck() {
    if (
      this.strikeCount !== 0 &&
      this.ballCount === 0 &&
      this.strikeCount !== 3
    ) {
      MissionUtils.Console.print(`${this.strikeCount}스트라이크`);
      return this.getUserNumber();
    }
    return false;
  }

  strikeAndBallCheck() {
    if (
      this.ballCount !== 0 &&
      this.strikeCount !== 0 &&
      this.strikeCount > 0 &&
      this.strikeCount < 3
    ) {
      MissionUtils.Console.print(
        `${this.ballCount}볼 ${this.strikeCount}스트라이크`,
      );
      return this.getUserNumber();
    }
    return false;
  }

  askRestartOrExit() {
    MissionUtils.Console.print(
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
    );
    MissionUtils.Console.readLine('', userinput => {
      if (userinput === '1') {
        this.playFirstTime = false;
        return this.play();
      }
      if (userinput === '2') {
        return MissionUtils.Console.close();
      }
      return MissionUtils.Console.close();
    });
  }
}

function errorCheck(userInput) {
  if (
    userInput.length === 0 ||
    [...new Set(userInput)].length !== 3 ||
    userInput.length !== 3 ||
    userInput.includes(0) ||
    isNaN(userInput.join(''))
  ) {
    throw new Error(
      '잘못된 값을 입력하셨습니다. 1~9까지의 세개의 다른 숫자를 입력해주세요',
    );
  }
  return userInput;
}

module.exports = App;
