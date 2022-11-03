const MissionUtils = require("@woowacourse/mission-utils");
let computer = [];

class App {
  play() {
    this.computerNumber();
  }

  computerNumber() {
    computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
  }
}
module.exports = App;
