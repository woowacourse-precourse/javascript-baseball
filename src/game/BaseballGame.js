const { Console } = require('@woowacourse/mission-utils');
const { createRandomNumber } = require('../computer/computer');
const {
  NUMBER_LENGTH,
  GAME_MESSAGE,
  RESTART_OPTION,
} = require('../constant/constant');
const inputValidator = require('../input/validator');
const Calculator = require('./Calculator');

class BaseballGame {
  constructor() {
    this.calculator = new Calculator();
  }

  init() {
    this.printStartMessage();
    this.startGame();
  }

  printStartMessage() {
    Console.print(GAME_MESSAGE.start);
  }

  getResult(randomNumber) {
    Console.readLine(GAME_MESSAGE.input, (input) => {
      const valid = inputValidator(input);

      if (!valid.isValid) {
        throw valid.message;
      }

      const { ball, strike } = this.calculator.calcScore(input, randomNumber);

      this.printResult(ball, strike);

      if (strike !== NUMBER_LENGTH) {
        this.getResult(randomNumber);
      }

      this.askRestart();
    });
  }

  printResult(ball, strike) {
    const ballMessage = ball > 0 ? `${ball}볼 ` : '';
    const strikeMessage = strike > 0 ? `${strike}스트라이크` : '';

    if (!ball && !strike) {
      return Console.print(GAME_MESSAGE.nothing);
    }

    if (strike === NUMBER_LENGTH) {
      return Console.print(`${strikeMessage}\n` + GAME_MESSAGE.correct);
    }

    return Console.print(`${ballMessage}${strikeMessage}`);
  }

  askRestart() {
    Console.readLine(GAME_MESSAGE.restart, (answer) => {
      if (answer === RESTART_OPTION.restart) {
        return this.startGame();
      }

      if (answer === RESTART_OPTION.end) {
        return Console.close();
      }
    });
  }

  startGame() {
    const randomNumber = createRandomNumber();

    this.getResult(randomNumber);
  }
}

module.exports = BaseballGame;
