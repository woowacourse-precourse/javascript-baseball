class BaseballHint {
  #strike;
  #ball;

  constructor({ strike, ball }) {
    this.validate(strike, ball);
    this.#strike = strike;
    this.#ball = ball;
  }

  validate(strike, ball) {
    if (!this.#isNumber(strike) || !this.#isNumber(ball)) {
      throw new Error('스트라이크와 볼 갯수는 숫자여야 합니다.');
    }

    if (!this.#isInRange(strike, 0, 3) || !this.#isInRange(ball, 0, 3)) {
      throw new Error('스트라이크와 볼은 최소 0개부터 최대 3개입니다.');
    }
  }

  #isNumber(value) {
    return typeof value === 'number';
  }

  #isInRange(value, min, max) {
    return value >= min && value <= max;
  }

  toString() {
    if (this.#strike === 0 && this.#ball === 0) return '낫싱';

    const ballString = this.#ball > 0 ? `${this.#ball}볼` : '';
    const strikeString = this.#strike > 0 ? `${this.#strike}스트라이크` : '';

    return `${ballString} ${strikeString}`.trim();
  }
}

module.exports = BaseballHint;
