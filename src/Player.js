class Player {
  getNumbers() {
    return this.numbers;
  }

  setNumbers(value) {
    const numbers = [...value];
    this.numbers = numbers;
    return this;
  }
}

module.exports = Player;
