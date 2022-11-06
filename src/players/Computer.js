const { Random } = require('@woowacourse/mission-utils');

class Computer {
  constructor() {
    this.number = [];
  }

  createNumbers() {
    const computerNumbers = [];
    while (computerNumbers.length !== 3) {
      const randomNumber = Random.pickNumberInRange(1, 9);
      if (!computerNumbers.includes(randomNumber)) {
        computerNumbers.push(randomNumber);
      }
    }

    this.number = computerNumbers;
  }
}

module.exports = Computer;
