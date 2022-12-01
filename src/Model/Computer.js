class Computer {
  #number;

  constructor(makeRandomNumber) {
    this.#number = makeRandomNumber();
  }

  getNumber(i) {
    return this.#number[i];
  }

  get number() {
    return this.#number;
  }
}

module.exports = Computer;

