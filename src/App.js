const MissionUtils = require('@woowacourse/mission-utils');

class App {
  play() {}

  generateAnswer() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
  }

  constructor() {
    this.answer = this.generateAnswer();
  }
}

module.exports = App;
