const MissionUtils = require("@woowacourse/mission-utils");
const COMPUTER_NUMBER = [];
class App {
  play() {}

  randomComputerNumber() {
    while (COMPUTER_NUMBER.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!COMPUTER_NUMBER.includes(number)) {
        COMPUTER_NUMBER.push(number);
      }
    }
  }
}

module.exports = App;
