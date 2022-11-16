class User {
  #baseballHint;

  guess(numbers, computer) {
    this.#baseballHint = computer.giveHint(numbers);
  }
}

module.exports = User;
