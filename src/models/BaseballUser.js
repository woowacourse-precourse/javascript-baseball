const { rule } = require('../constants');

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
      throw new Error('1-9의 숫자를 입력해주세요.');
    }

    if (BaseballUser.#isInvalidLength(numbers)) {
      throw new Error('3자리의 숫자를 입력해주세요.');
    }

    if (BaseballUser.#isDuplicate(numbers)) {
      throw new Error('중복된 값이 포함되어 있습니다.');
    }
  }

  static #isIncludeCharacter(numbers) {
    return numbers.find((number) => isNaN(parseInt(number, 10)));
  }

  static #isDuplicate(numbers) {
    return numbers.length !== new Set(numbers).size;
  }

  static #isInvalidLength(numbers) {
    return numbers.length !== rule.LENGTH;
  }

  static #isIncludeZero(numbers) {
    return numbers.includes('0');
  }
}

module.exports = BaseballUser;
