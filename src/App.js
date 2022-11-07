const { Console } = require('@woowacourse/mission-utils');
const generateNumber = require('./utils/generateNumber');
const validateInputValue = require('./utils/validator');
const compareTwoArrayResult = require('./utils/compare');
const { MESSAGE, COUNT_MESSAGE, ERROR_MESSAGE, GAME_PROGRESS } = require('./constants');

class App {
  play() {
    return this.startMessage().makeComputerNumArr().getInputAndCompare();
  }

  makeComputerNumArr() {
    this.computerNumArr = generateNumber();
    return this;
  }

  startMessage() {
    Console.print(MESSAGE.START_GAME);
    return this;
  }

  getInputAndCompare() {
    Console.readLine(MESSAGE.INPUT_NUMBER, input => {
      let gameResult = this.checkInputNumberValidate(input).checkGameResult(input);
      return this.isGameOver(gameResult);
    });
  }

  checkInputNumberValidate(input) {
    const isInputValidate = validateInputValue(input);
    if (typeof isInputValidate !== 'boolean') {
      return this.throwInputError(isInputValidate);
    }
    return this;
  }

  checkGameResult(input) {
    const inputNumArr = input.split('').map(element => +element);
    const { computerNumArr } = this;
    const gameResult = compareTwoArrayResult(computerNumArr, inputNumArr);
    Console.print(gameResult);
    return gameResult;
  }

  isGameOver(result) {
    if (result !== COUNT_MESSAGE.THREE_STRIKE) {
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
    if (answer === GAME_PROGRESS.RETRY) {
      return this.makeComputerNumArr();
    }
    if (answer === GAME_PROGRESS.END) {
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
