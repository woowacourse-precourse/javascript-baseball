const createRandomNumbers = require('./utils/createRandomNumbers');

class Computer {
  getNumbers() {
    return this.numbers;
  }

  setRandomNumbers() {
    this.numbers = createRandomNumbers();
    return this;
  }
}

module.exports = Computer;
