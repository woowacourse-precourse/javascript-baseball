const MissionUtils = require('@woowacourse/mission-utils');

class Computer {
  constructor() {
    this.computerNumberArray = [];
  }
  setRandomComputerNumberArray() {
    this.computerNumberArray = [];
    while (this.computerNumberArray.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.computerNumberArray.includes(number)) {
        this.computerNumberArray.push(number);
      }
    }
  }
}

module.exports = Computer;
