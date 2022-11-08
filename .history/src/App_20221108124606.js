const MissionUtils = require("@woowacourse/mission-utils");
class App {
  play() {
    let computerNumber;
    computerNumber = MissionUtils.Random.pickUniqueNumbersInRange(1, 10, 3);
  }
}

module.exports = App;
