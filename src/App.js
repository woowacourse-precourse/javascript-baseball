const { Console } = require('@woowacourse/mission-utils');
const generateNumber = require('./utils/generateNumber');
const validateInputValue = require('./utils/validator');
const compareTwoArrayResult = require('./utils/compare');
const { MESSAGE, COUNT_MESSAGE, ERROR_MESSAGE, GAME_PROGRESS } = require('./constants');

class App {
  play() {
    this.startMessage();
    this.makeComputerNumArr();
  }

  makeComputerNumArr() {
    this.computerNumArr = generateNumber();
    this.getInputAndCompare();
  }

  startMessage() {
    Console.print(MESSAGE.START_GAME);
  }

  getInputAndCompare() {
    Console.readLine(MESSAGE.INPUT_NUMBER, input => {
      const { computerNumArr } = this;
      const isInputValidate = validateInputValue(input);
      if (typeof isInputValidate !== 'boolean') return this.throwInputError(isInputValidate);
      const inputNumArr = input.split('').map(element => +element);
      const gameResult = compareTwoArrayResult(computerNumArr, inputNumArr);
      Console.print(gameResult);
      return this.isGameOver(gameResult);
    });
  }

  isGameOver(result) {
    if (result !== COUNT_MESSAGE.CORRECT_ANSWER) {
      return this.getInputAndCompare();
    }
    return this.endOrRetry();
  }

  endOrRetryMessage() {
    Console.print(MESSAGE.STRIKE_OUT);
    Console.print(MESSAGE.RETRY_OR_END);
  }

  endOrRetry() {
    this.endOrRetryMessage();
    Console.readLine('', input => {
      this.checkOneOrTwo(input);
    });
  }

  checkOneOrTwo(answer) {
    if (answer === GAME_PROGRESS.RESTART) {
      return this.makeComputerNumArr();
    }
    if (answer === GAME_PROGRESS.TERMINATE) {
      return this.close();
    }
    return this.throwInputError(ERROR_MESSAGE.NOT_ONE_OR_TWO_ERROR);
  }

  throwInputError(errMessage) {
    throw new Error(errMessage);
  }

  close() {
    Console.close();
  }
}

module.exports = App;
