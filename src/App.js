const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {}

  getRandomNumber() {
    MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
  }
}

const numberBaseball = new App();

module.exports = App;
