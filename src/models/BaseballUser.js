const {
  isDuplicate,
  isInvalidLength,
  isIncludeCharacter,
  isIncludeZero,
} = require('../utils/validate');

class BaseballUser {
  constructor() {
    this.numbers = [];
  }

  setNumbers(number) {
    const numbers = [...number];
    this.#validateNumber(numbers);
    this.numbers = numbers;
  }

  #validateNumber(numbers) {
    if (isIncludeCharacter(numbers) || isIncludeZero(numbers)) {
      throw new Error('1-9의 숫자를 입력해주세요.');
    }

    if (isInvalidLength(numbers)) {
      throw new Error('3자리의 숫자를 입력해주세요.');
    }

    if (isDuplicate(numbers)) {
      throw new Error('중복된 값이 포함되어 있습니다.');
    }
  }
}

module.exports = BaseballUser;
