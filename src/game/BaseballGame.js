const { Console } = require('@woowacourse/mission-utils');
const { createRandomNumber } = require('../computer/computer');
const { NUMBER_LENGTH, GAME_MESSAGE } = require('../constant/constant');
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
    Console.print(GAME_MESSAGE.start);
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

    this.printResult(ball, strike);
  }

  printResult(ball, strike) {
    if (!ball && !strike) return Console.print(GAME_MESSAGE.nothing);

    if (strike === NUMBER_LENGTH) {
      this.isCorrect = true;
      return Console.print(`${strike}스트라이크`);
    }

    return Console.print(`${ball}볼 ${strike}스트라이크`);
  }

  startGame() {
    while (!this.isCorrect) {
      Console.readLine(GAME_MESSAGE.input, (input) => {
        this.getResult(input);
      });
    }
  }
}

module.exports = BaseballGame;
