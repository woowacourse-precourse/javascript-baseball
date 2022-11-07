const { Random } = require('@woowacourse/mission-utils');
const { NUMBER } = require('../utils/constant');

class Computer {
  constructor() {
    this.number = [];
  }

  createNumbers() {
    const computerNumbers = [];
    while (computerNumbers.length !== NUMBER.ARRAY_LENGTH) {
      const randomNumber = Random.pickNumberInRange(NUMBER.MIN_RANGE, NUMBER.MAX_RANGE);
      if (!computerNumbers.includes(randomNumber)) {
        computerNumbers.push(randomNumber);
      }
    }

    this.number = computerNumbers;
  }
}

module.exports = Computer;
