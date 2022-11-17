const BaseballHint = require('./BaseballHint');

const { BASEBALL } = require('./constants/error');
const { SETTING } = require('./constants/game');

class Baseball {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.some((number) => !Number.isInteger(number))) {
      throw new Error(BASEBALL.ONLY_NUMBER);
    }

    if (numbers.length !== SETTING.NUMBER_COUNT) {
      throw new Error(BASEBALL.LENGTH);
    }

    if (numbers.length !== new Set(numbers).size) {
      throw new Error(BASEBALL.DUPLICATE);
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
