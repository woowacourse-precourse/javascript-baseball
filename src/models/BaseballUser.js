const { RULE, ERROR_MESSAGE } = require('../constants/baseball');

class BaseballUser {
  constructor() {
    this.numbers = [];
  }

  setNumbers(number) {
    const numbers = [...number];
    BaseballUser.#validateNumber(numbers);
    this.numbers = numbers;
  }

  static #validateNumber(numbers) {
    if (BaseballUser.#isIncludeCharacter(numbers) || BaseballUser.#isIncludeZero(numbers)) {
      throw new Error(ERROR_MESSAGE.EXTRA_CHARACTER);
    }

    if (BaseballUser.#isInvalidLength(numbers)) {
      throw new Error(ERROR_MESSAGE.INVALID_LENGTH);
    }

    if (BaseballUser.#isDuplicate(numbers)) {
      throw new Error(ERROR_MESSAGE.DUPLICATE);
    }
  }

  static #isIncludeCharacter(numbers) {
    return numbers.find((number) => isNaN(parseInt(number, 10)));
  }

  static #isDuplicate(numbers) {
    return numbers.length !== new Set(numbers).size;
  }

  static #isInvalidLength(numbers) {
    return numbers.length !== RULE.LENGTH;
  }

  static #isIncludeZero(numbers) {
    return numbers.includes('0');
  }
}

module.exports = BaseballUser;
