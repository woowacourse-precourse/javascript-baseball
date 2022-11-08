const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('./Const');

const VALID_REGEX = /^[1-9]{3}$/;

class Function {
  static validByRegex(input) {
    return !VALID_REGEX.test(input);
  }

  static validDuplicate(input) {
    const setInputLength = new Set(input.toString().split('')).size;
    if (input.length !== setInputLength) return true;
    return false;
  }

  static validInput(input) {
    if (this.validByRegex(input)) return false;
    if (this.validDuplicate(input)) return false;
    return true;
  }

  static throwInvalidInputError(input) {
    if (!this.validInput(input)) {
      this.endApp();
      throw new Error(`${MESSAGE.INPUTERROR}`);
    }
  }

  static validOneOrTwo(input) {
    if (input !== '1' && input !== '2') {
      throw new Error(`${MESSAGE.INPUTERROR}`);
    }
  }

  static makeStringToArray(input) {
    return input.toString().split('');
  }

  static endApp() {
    Console.close();
    Console.print(MESSAGE.END);
  }
}

module.exports = Function;
