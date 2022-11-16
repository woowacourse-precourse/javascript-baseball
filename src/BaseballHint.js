class BaseballHint {
  #strike;
  #ball;

  constructor({ strike, ball }) {
    this.validate(strike, ball);
    this.#strike = strike;
    this.#ball = ball;
  }

  validate(strike, ball) {}
}

module.exports = BaseballHint;
