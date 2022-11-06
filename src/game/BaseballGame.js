const { Console } = require('@woowacourse/mission-utils');
const { createRandomNumber } = require('../computer/computer');
const inputValidator = require('../input/validator');
const Calculator = require('./Calculator');

class BaseballGame {
  constructor() {
    this.randomNumber = createRandomNumber();
    this.isCorrect = false;
    this.calculator = new Calculator();
  }

  init() {
    this.printStartMessage();
    this.startGame();
  }

  printStartMessage() {
    Console.print('숫자 야구 게임을 시작합니다.');
  }

  getResult(input) {
    const valid = inputValidator(input);

    if (!valid.isValid) {
      throw valid.message;
    }

    const { ball, strike } = this.calculator.calcScore(
      input,
      this.randomNumber
    );

    if (!ball && !strike) Console.print('낫싱');
    if (strike === 3) {
      this.isCorrect = true;
      Console.print(
        `${strike}스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료`
      );
    }
    if (strike !== 3) {
      Console.print(`${ball}볼 ${strike}스트라이크`);
    }
  }

  startGame() {
    while (!this.isCorrect) {
      Console.readLine('숫자를 입력해주세요 : ', (input) => {
        this.getResult(input);
      });
    }
  }
}

module.exports = BaseballGame;
