const MissionUtils = require("@woowacourse/mission-utils");

class Computer {
  constructor () {
    this.numbers = [];
  }

  getNumbers () {
    return this.numbers;
  }

  setNumbers (count) {
    while (this.numbers.length < count) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.numbers.includes(number)) {
        this.numbers.push(number);
      }
    }
  }
}

module.exports = Computer;