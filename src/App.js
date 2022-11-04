const MissionUtils = require("@woowacourse/mission-utils");

class App {
  resultNumbers;
  constructor(resultNumbers) {
    this.setNumbers();
  }

  setNumbers() {
    this.resultNumbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
  }
  play() {}
}

module.exports = App;
