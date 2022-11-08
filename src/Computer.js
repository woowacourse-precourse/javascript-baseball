const { Random } = require('@woowacourse/mission-utils');

class Computer {
  constructor() {
    this.selectedNumber = '';
  }

  getRandomNumber() {
    const numberArray = this.selectedNumber
      .toString()
      .split('')
      .map(number => +number);
    const number = Random.pickNumberInRange(1, 9);
    if (!numberArray.includes(number)) {
      return number;
    }
    return this.getRandomNumber();
  }

  setRandomNumber() {
    this.selectedNumber = '';
    while (this.selectedNumber.length < 3) {
      this.selectedNumber += this.getRandomNumber();
    }
  }
}

module.exports = Computer;
