const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.targetNumber = [];
  }

  resetTargetNumber() {
    this.targetNumber = [];
    while (this.targetNumber.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.targetNumber.includes(number)) {
        this.targetNumber.push(number);
      }
    }
  }

  play() {
    this.resetTargetNumber();
  }
}

module.exports = App;
