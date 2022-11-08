const { Random } = require('@woowacourse/mission-utils');

class Computer {
  #Numbers;

  constructor() {
    this.resetComputer();
  }

  getComNums() {
    return this.#Numbers;
  }

  getComNumStr() {
    return this.#Numbers.join('');
  }

  resetComputer() {
    this.#Numbers = this.getRandomsNumStr(1, 9, 3);
  }
  getRandomsNumStr(start, end, size) {
    const randomNums = [];
    while (randomNums.length < size) {
      const nums = Random.pickNumberInRange(start, end);
      if (!randomNums.includes(nums)) randomNums.push(nums);
    }
    return randomNums;
  }
}

module.exports = Computer;
