const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.answer = [];
    this.inputs = [];
    this.utils = MissionUtils;
  }
  generateNumber() {
    return this.utils.Random.pickNumberInRange(1, 9);
  }
  play() {}
}

module.exports = App;
