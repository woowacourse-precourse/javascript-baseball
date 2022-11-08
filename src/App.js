const { Console, Random } = require('@woowacourse/mission-utils');

const MESSAGE = {
  GAMESTART: '숫자 야구 게임을 시작합니다.',
  GAMEFINISHED: `3개의 숫자를 모두 맞히셨습니다! 게임 종료`,
  GAMERESTART: `게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.`,
};

class App {
  constructor() {
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
    this.answer = [];
    while (this.answer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!this.answer.includes(number)) {
        this.answer.push(number);
      }
    }
  }

  playInning() {
    this.resetResult();
    const userAnswer = this.getUserInput();
    this.getResult(userAnswer);
    this.printResult();
    this.checkFinished();
  }

  resetResult() {
    this.result.ball = 0;
    this.result.strike = 0;
  }

  checkFinished() {
    if (this.result.strike === 3) {
      Console.print(MESSAGE.GAMEFINISHED);
      Console.print(MESSAGE.GAMERESTART);
      this.getUserRestart();
    } else {
      this.playInning();
    }
  }

  getUserRestart() {
    Console.readLine('', input => {
      if (input === '1') this.play();
      else if (input === '2') Console.close();
      else {
        throw new Error('잘못된 값을 입력했습니다');
      }
    });
  }

  printResult() {
    if (!this.result.ball && !this.result.strike) {
      Console.print(`낫싱`);
    } else if (!this.result.ball) {
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
