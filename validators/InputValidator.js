const MESSAGE = require('../constants/gameMessages');
const NUMBER = require('../constants/gameSetting');

class InputValidator {
  static checkExceptNumber(answer) {
    return answer?.split('').map(Number)
      .includes(NUMBER.EXCEPT);
  }

  static checkNumber(answer) {
    return isNaN(answer);
  }

  static checkThreeNumber(answer) {
    return answer?.toString().length !== NUMBER.RANDOM_LENGTH;
  }

  static checkDuplication(answer) {
    const inputList = answer?.split('');
    const setCollection = new Set(inputList);
    return setCollection.size !== inputList?.length;
  }

  static checkBaseballNumber(number) {
    if (
      this.checkExceptNumber(number)
      || this.checkNumber(number)
      || this.checkThreeNumber(number)
      || this.checkDuplication(number)
    ) {
      throw new Error(MESSAGE.GAME.ERROR);
    }
  }

  static checkInputRestartExit(input) {
    if (input === NUMBER.RESTART) return true;
    if (input === NUMBER.EXIT) return false;
    throw new Error(MESSAGE.GAME.ERROR);
  }
}

module.exports = InputValidator;
