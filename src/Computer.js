const { Random } = require("@woowacourse/mission-utils");

class Computer {
  constructor() {
    this.number = null;
  }

  setNumber() {
    const numbers = [];
    while (numbers.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!numbers.includes(number)) {
        numbers.push(number);
      }
    }
    this.number = numbers;
  }

  getNumber() {
    return this.number;
  }
}

module.exports = Computer;
