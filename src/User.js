class User {
  #baseballHint;

  guess(numbers, computer) {
    this.#baseballHint = computer.giveHint(numbers);
  }

  tellResult() {
    return this.#baseballHint.toString();
  }
}

module.exports = User;
