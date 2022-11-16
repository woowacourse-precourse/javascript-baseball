const { BASEBALL_HINT } = require('./constants/error');
const { SETTING, HINT } = require('./constants/game');

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
      throw new Error(BASEBALL_HINT.ONLY_NUMBER);
    }

    if (
      !this.#isInRange(strike, HINT.MIN_COUNT, SETTING.NUMBER_COUNT) ||
      !this.#isInRange(ball, HINT.MIN_COUNT, SETTING.NUMBER_COUNT)
    ) {
      throw new Error(BASEBALL_HINT.IN_RANGE);
    }
  }

  #isNumber(value) {
    return typeof value === 'number';
  }

  #isInRange(value, min, max) {
    return value >= min && value <= max;
  }

  toString() {
    if (this.#strike === HINT.MIN_COUNT && this.#ball === HINT.MIN_COUNT) return HINT.NOTHING;

    const ballString = this.#ball > HINT.MIN_COUNT ? `${this.#ball}${HINT.BALL}` : '';
    const strikeString = this.#strike > HINT.MIN_COUNT ? `${this.#strike}${HINT.STRIKE}` : '';

    return `${ballString} ${strikeString}`.trim();
  }
}

module.exports = BaseballHint;
