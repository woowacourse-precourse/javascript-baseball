class Computer {
  #number;

  constructor(makeRandomNumber) {
    this.#number = makeRandomNumber();
  }

  getNumber(i) {
    return this.#number[i];
  }
}

module.exports = Computer;
