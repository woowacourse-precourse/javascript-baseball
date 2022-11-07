const { RULE, ERROR_MESSAGE } = require('../constants/baseball');

class BaseballUser {
  constructor() {
    this.digits = [];
  }

  setDigits(number) {
    const digits = [...number];
    BaseballUser.#validateNumber(digits);
    this.digits = digits;
  }

  static #validateNumber(digits) {
    if (BaseballUser.#isIncludeCharacter(digits) || BaseballUser.#isIncludeZero(digits)) {
      throw new Error(ERROR_MESSAGE.INVALID_CHARACTER);
    }

    if (BaseballUser.#isInvalidLength(digits)) {
      throw new Error(ERROR_MESSAGE.INVALID_LENGTH);
    }

    if (BaseballUser.#isDuplicate(digits)) {
      throw new Error(ERROR_MESSAGE.DUPLICATE);
    }
  }

  static #isIncludeCharacter(digits) {
    return digits.find((number) => isNaN(parseInt(number, 10)));
  }

  static #isDuplicate(digits) {
    return digits.length !== new Set(digits).size;
  }

  static #isInvalidLength(digits) {
    return digits.length !== RULE.LENGTH;
  }

  static #isIncludeZero(digits) {
    return digits.includes('0');
  }
}

module.exports = BaseballUser;
