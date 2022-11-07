const MissionUtils = require('@woowacourse/mission-utils');

const { Random, Console } = MissionUtils;

const START_MESSAGE = '숫자 야구 게임을 시작합니다.';
const USERINPUT_MESSAGE = '숫자를 입력해주세요 : ';
const ERROR_MESSAGE = '잘못된 입력입니다.';
const GAMEEND_MESSAGE = '3개의 숫자를 모두 맞히셨습니다! 게임 종료';
const ASKTORESTART_MESSAGE =
  '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. ';

class App {
  constructor() {
    this.computerNum = [];
    this.userInput = '';
    this.strike = 0;
    this.ball = 0;
  }

  play() {
    Console.print(START_MESSAGE);
    this.createComputerNum();
    this.start();
  }

  createComputerNum() {
    const randomNumberSet = new Set();
    while (randomNumberSet.size < 3) {
      randomNumberSet.add(Random.pickNumberInRange(1, 9));
    }
    this.computerNum = [...randomNumberSet].join('');
  }

  start() {
    Console.readLine(USERINPUT_MESSAGE, (userInput) => {
      if (!this.isValidUserInput(userInput)) {
        this.isError();
      }
      Console.print(`${USERINPUT_MESSAGE}${this.userInput}`);
      this.strike = 0;
      this.ball = 0;
      this.getAnswer();

      if (this.strike !== 3) {
        return this.start();
      }

      this.askUserToRestart();
    });
  }

  isValidUserInput(input) {
    input.replace(/ /g, '');

    if (input.length !== 3 || Number.isNaN(+input)) {
      return false;
    }
    this.userInput = input;

    return true;
  }

  isStrike() {
    this.computerNum.split('').forEach((num, idx) => {
      if (this.computerNum[idx] === this.userInput[idx]) {
        this.strike += 1;
      }
    });
  }

  isBall() {
    this.computerNum.split('').forEach((num, idx) => {
      if (
        this.computerNum[idx] !== this.userInput[idx] &&
        this.userInput.includes(this.computerNum[idx])
      ) {
        this.ball += 1;
      }
    });
  }

  getAnswer() {
    this.isStrike();
    this.isBall();
    const strikeText = this.strike ? `${this.strike}스트라이크` : '';
    const ballText = this.ball ? `${this.ball}볼` : '';
    if (this.strike || this.ball) {
      Console.print(`${ballText} ${strikeText}`.trim());
      return;
    }
    Console.print('낫싱');
  }

  isRestart() {
    this.play();
  }

  isExit() {
    Console.close();
  }

  isError() {
    throw new Error(ERROR_MESSAGE);
  }

  askUserToRestart() {
    Console.print(GAMEEND_MESSAGE);
    Console.print(ASKTORESTART_MESSAGE);
    Console.readLine(ASKTORESTART_MESSAGE, (userInput) => {
      if (userInput === '1') {
        Console.print(userInput);
        this.isRestart();
        return;
      }
      if (userInput === '2') {
        Console.print(userInput);
        this.isExit();
      } else {
        this.isError();
      }
    });
  }
}

module.exports = App;
