const { Random } = require('@woowacourse/mission-utils');
const Baseball = require('./Baseball');

class Computer {
  #baseball;

  pickRandomBaseball() {
    const numbers = this.#pickRandomNumbers();
    this.#baseball = new Baseball(numbers);
  }

  #pickRandomNumbers() {
    const numberSet = new Set();

    while (numberSet.size < 3) {
      const number = Random.pickNumberInRange(1, 9);
      numberSet.add(number);
    }

    return [...numberSet];
  }

  giveHint(numbers) {
    return this.#baseball.createHint(numbers);
  }
}

module.exports = Computer;
