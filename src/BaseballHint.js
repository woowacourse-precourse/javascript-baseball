class BaseballHint {
  #strike;
  #ball;

  constructor({ strike, ball }) {
    this.validate(strike, ball);
    this.#strike = strike;
    this.#ball = ball;
  }

  validate(strike, ball) {}

  toString() {
    if (this.#strike === 0 && this.#ball === 0) return '낫싱';

    const ballString = this.#ball > 0 ? `${this.#ball}볼` : '';
    const strikeString = this.#strike > 0 ? `${this.#strike}스트라이크` : '';

    return `${ballString} ${strikeString}`.trim();
  }
}

module.exports = BaseballHint;
