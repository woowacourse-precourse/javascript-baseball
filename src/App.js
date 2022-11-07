const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
    
  }
}

module.exports = App;
