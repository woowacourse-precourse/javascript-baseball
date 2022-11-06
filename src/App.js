const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {}
}

class Computer {
  constructor() {
    this._digits = [];
    this._initialize();
  }

  _initialize() {
    this._digits.length = 0;
    while (this._digits.length <= 3) {
      const digit = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this._digits.includes(digit)) {
        this._digits.push(digit);
      }
    }
  }
}

module.exports = App;
