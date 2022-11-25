const MissionUtils = require("@woowacourse/mission-utils");

class Model {
  data() {
    this.computerNumbers = null;
    this.userNumbers = null;
  }

  generateComputerNumbers() {
    const computer = new Set();
    while (computer.size < 3) {
      computer.add(MissionUtils.Random.pickNumberInRange(1, 9));
    }
    const computerNumbers = Array.from(computer);
    this.computerNumbers = computerNumbers;
  }

  updatdeData(computerNumbers, userNumbers) {
    this.computerNumbers =
      computerNumbers === null ? this.computerNumbers : computerNumbers;
    this.userNumbers = userNumbers === null ? this.userNumbers : userNumbers;
    console.log(this.computerNumbers, this.userNumbers);
  }

  countBall() {}

  countStrike() {}
}

module.exports = Model;
