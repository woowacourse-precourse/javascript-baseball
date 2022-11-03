const { Console, Random } = require('@woowacourse/mission-utils');

class Computer {
  constructor(NUMBER_LIMIT) {
    this.NUMBER_LIMIT = NUMBER_LIMIT;
  }

  makeNumbers() {
    const randomNumberSet = new Set();

    while (randomNumberSet.size !== this.NUMBER_LIMIT) {
      randomNumberSet.add(Random.pickNumberInRange(1, 9));
    }

    return [...randomNumberSet].join('');
  }
}

module.exports = Computer;
