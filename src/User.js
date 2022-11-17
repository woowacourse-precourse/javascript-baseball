const BaseballHint = require('./BaseballHint');

const { USER } = require('./constants/error');

class User {
  #baseballHint;

  guess(numbers, computer) {
    const baseballHint = computer.giveHint(numbers);

    this.validate(baseballHint);
    this.#baseballHint = baseballHint;
  }

  validate(baseballHint) {
    if (!baseballHint instanceof BaseballHint) {
      throw new Error(USER.INVALID_INSTANCE);
    }
  }

  tellResult() {
    return this.#baseballHint.toString();
  }
}

module.exports = User;
