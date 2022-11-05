const MissionUtils = require('@woowacourse/mission-utils');

class Computer {
  constructor() {
    this.numberArray = [];
  }

  setRandomNumber() {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!this.numberArray.includes(number)) {
      this.numberArray.push(number);
    }
  }
  setRandomNumberArray() {
    this.numberArray = [];
    while (this.numberArray.length < 3) {
      this.setRandomNumber();
    }
  }
}

module.exports = Computer;
