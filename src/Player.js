class Player {
  #value;
  constructor() {
    this.#value = '';
  }

  getValue() {
    return this.#value;
  }

  setValue(value) {
    this.#value = value;
  }
}

module.exports = Player;
