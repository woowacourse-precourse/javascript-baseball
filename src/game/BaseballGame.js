const { Console } = require('@woowacourse/mission-utils');
const { createRandomNumber } = require('../computer/computer');
const { NUMBER_LENGTH, GAME_MESSAGE } = require('../constant/constant');
const inputValidator = require('../input/validator');
const Calculator = require('./Calculator');

class BaseballGame {
  constructor() {
    this.isStop = false;
    this.calculator = new Calculator();
  }

  init() {
    this.printStartMessage();
    this.startGame();
  }

  printStartMessage() {
    Console.print(GAME_MESSAGE.start);
  }

  getResult(input, randomNumber) {
    const valid = inputValidator(input);

    if (!valid.isValid) {
      throw valid.message;
    }

    const { ball, strike } = this.calculator.calcScore(input, randomNumber);

    return this.printResult(ball, strike);
  }

  printResult(ball, strike) {
    if (!ball && !strike) {
      Console.print(GAME_MESSAGE.nothing);

      return false;
    }

    if (strike === NUMBER_LENGTH) {
      Console.print(`${strike}스트라이크`);

      return true;
    }

    Console.print(`${ball}볼 ${strike}스트라이크`);

    return false;
  }

  askRestart() {
    Console.readLine(GAME_MESSAGE.restart, (answer) => {
      if (answer === '1') {
        this.startGame();
      }
    });
  }

  startGame() {
    const randomNumber = createRandomNumber();

    while (!this.isStop) {
      Console.readLine(GAME_MESSAGE.input, (input) => {
        const isCorrect = this.getResult(input, randomNumber);

        if (isCorrect) {
          this.askRestart();
        }
      });
    }
  }
}

module.exports = BaseballGame;
