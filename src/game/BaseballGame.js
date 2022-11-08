const { Console } = require('@woowacourse/mission-utils');
const {
  NUMBER_LENGTH,
  GAME_MESSAGE,
  RESTART_OPTION,
  ERROR_MESSAGE,
} = require('../constant/constant');
const Computer = require('../computer/Computer');
const Calculator = require('./Calculator');
const Validator = require('../input/Validator');
const App = require('../App');

class BaseballGame {
  constructor() {
    this.computer = new Computer();
    this.calculator = new Calculator();
  }

  init() {
    this.printStartMessage();
    this.start();
  }

  printStartMessage() {
    Console.print(GAME_MESSAGE.start);
  }

  getResult(randomNumber) {
    Console.readLine(GAME_MESSAGE.input, (input) => {
      Validator.checkValidation(input);

      const { ball, strike } = this.calculator.calcScore(input, randomNumber);

      this.printResult(ball, strike);

      if (strike === NUMBER_LENGTH) {
        return this.askRestart();
      }

      return this.getResult(randomNumber);
    });
  }

  printResult(ball, strike) {
    const ballMessage = ball > 0 ? `${ball}볼 ` : '';
    const strikeMessage = strike > 0 ? `${strike}스트라이크` : '';

    if (!ball && !strike) {
      return Console.print(GAME_MESSAGE.nothing);
    }

    if (strike === NUMBER_LENGTH) {
      Console.print(`${strikeMessage}`);

      return Console.print(GAME_MESSAGE.correct);
    }

    return Console.print(`${ballMessage}${strikeMessage}`);
  }

  askRestart() {
    Console.readLine(GAME_MESSAGE.restart, (input) => {
      if (input === RESTART_OPTION.restart) {
        return this.start();
      }

      if (input === RESTART_OPTION.end) {
        return Console.close();
      }

      throw ERROR_MESSAGE.restartInput;
    });
  }

  start() {
    const randomNumber = this.computer.createRandomNumber();

    this.getResult(randomNumber);
  }
}

module.exports = BaseballGame;
