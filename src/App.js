const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    function makeRandomNumber() {
      let random_number = "";
      for (let i = 0; i < 3; i++) {
        random_number += MissionUtils.Random.pickNumberInRange(1, 9);
      }
      return random_number;
    }
  }
}

module.exports = App;
