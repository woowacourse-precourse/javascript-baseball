const { Random } = require('@woowacourse/mission-utils');
const Baseball = require('./Baseball');

const { SETTING } = require('./constants/game');

class Computer {
  #baseball;

  pickRandomBaseball() {
    const numbers = this.#pickRandomNumbers();
    this.#baseball = new Baseball(numbers);
  }

  #pickRandomNumbers() {
    const numberSet = new Set();

    while (numberSet.size < SETTING.NUMBER_COUNT) {
      const number = Random.pickNumberInRange(SETTING.MIN_NUMBER, SETTING.MAX_NUMBER);
      numberSet.add(number);
    }

    return [...numberSet];
  }

  giveHint(numbers) {
    return this.#baseball.createHint(numbers);
  }
}

module.exports = Computer;
