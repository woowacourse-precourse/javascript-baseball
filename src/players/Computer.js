const { Random } = require('@woowacourse/mission-utils');

class Computer {
  constructor() {
    this.number = [];
  }

  createNumbers() {
    const computerNumbers = Random.pickUniqueNumbersInRange(1, 9, 3);
    this.number = computerNumbers;
  }
}

module.exports = Computer;
