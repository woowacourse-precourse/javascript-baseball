const BaseballHint = require('./BaseballHint');

class User {
  #baseballHint;

  guess(numbers, computer) {
    const baseballHint = computer.giveHint(numbers);

    this.validate(baseballHint);
    this.#baseballHint = baseballHint;
  }

  validate(baseballHint) {
    if (!baseballHint instanceof BaseballHint) {
      throw new Error('baseballHint는 BaseballHint 객체여야 합니다.');
    }
  }

  tellResult() {
    return this.#baseballHint.toString();
  }
}

module.exports = User;
