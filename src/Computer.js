const MissionUtils = require('@woowacourse/mission-utils');
const { Random } = MissionUtils;

class Computer {
  #randomNumbers;

  setRandomNumbers() {
    this.#randomNumbers = [];
    while (this.#randomNumbers.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!this.#randomNumbers.includes(number)) {
        this.#randomNumbers.push(number);
      }
    }
  }

  get randomNumbers() {
    return this.#randomNumbers;
  }
}

module.exports = Computer;