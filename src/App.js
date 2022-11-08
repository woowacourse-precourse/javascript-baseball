const { Console, Random } = require('@woowacourse/mission-utils');

const MESSAGE = {
  GAMESTART: '숫자 야구 게임을 시작합니다.',
};

class App {
  constructor() {
    this.answer = [];
    this.result = {
      ball: 0,
      strike: 0,
    };
  }

  play() {
    Console.print(MESSAGE.GAMESTART);
    this.pickRandomNumber();
    this.playInning();
  }

  pickRandomNumber() {
    while (this.answer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!this.answer.includes(number)) {
        this.answer.push(number);
      }
    }
  }

  playInning() {
    const userAnswer = this.getUserInput();
    this.getResult(userAnswer);
    this.printResult();
  }

  printResult() {
    if (!this.result.ball) {
      Console.print(`${this.result.strike}스트라이크`);
    } else if (!this.result.strike) {
      Console.print(`${this.result.ball}볼`);
    } else {
      Console.print(`${this.result.ball}볼 ${this.result.strike}스트라이크`);
    }
  }

  getResult(userAnswer) {
    [...userAnswer].forEach((userNum, idx) => {
      this.countBallAndStrike(userNum, idx);
    });
  }

  countBallAndStrike(userNum, idx) {
    if (this.answer.includes(parseInt(userNum, 10))) {
      if (this.answer.indexOf(parseInt(userNum, 10)) === idx) {
        this.result.strike += 1;
      } else {
        this.result.ball += 1;
      }
    }
  }

  getUserInput() {
    let userInput;
    Console.readLine('숫자를 입력해주세요 : ', input => {
      this.isValidInput(input);
      userInput = input;
    });
    return userInput;
  }

  isValidInput(input) {
    const checkDuplicate = new Set(input.split(''));
    if (
      [...input].includes('0') ||
      input.length !== 3 ||
      checkDuplicate.size !== 3
    ) {
      throw new Error('잘못된 값을 입력했습니다');
    }
    return this;
  }
}
module.exports = App;
