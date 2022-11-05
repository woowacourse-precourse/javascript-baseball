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
    this.#Numbers = Random.pickUniqueNumbersInRange(1, 9, 3);
  }
}

module.exports = Computer;
