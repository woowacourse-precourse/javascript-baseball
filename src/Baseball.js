const BaseballHint = require('./BaseballHint');

class Baseball {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.some((number) => !Number.isInteger(number))) {
      throw new Error('야구공은 숫자만 입력 가능합니다.');
    }

    if (numbers.length !== 3) {
      throw new Error('야구공은 3자리입니다.');
    }

    if (numbers.length !== new Set(numbers).size) {
      throw new Error('중복된 숫자는 입력이 불가능합니다.');
    }
  }

  createHint(numbers) {
    this.validate(numbers);

    const exist = this.#countExist(numbers);
    const strike = this.#countStrike(numbers);
    const ball = exist - strike;

    return new BaseballHint({ strike, ball });
  }

  #countExist(numbers) {
    const numberSet = new Set(numbers);
    const exists = this.#numbers.filter((number) => numberSet.has(number));
    return exists.length;
  }

  #countStrike(numbers) {
    const strikes = this.#numbers.filter((number, i) => number === numbers[i]);
    return strikes.length;
  }
}

module.exports = Baseball;
