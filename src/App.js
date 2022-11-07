const MissionUtils = require("@woowacourse/mission-utils");
const COMPUTER_NUMBER = [];

class App {
  play() {}

  randomComputerNumber() {
    while (COMPUTER_NUMBER.length < 3) {
      const NUMBER = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!COMPUTER_NUMBER.includes(NUMBER)) {
        COMPUTER_NUMBER.push(NUMBER);
      }
    }
  }
}

module.exports = App;
