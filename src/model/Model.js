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
  }

  calculate() {
    const countStrike = this.countStrike();
    const countBall =
      this.countBall() - countStrike < 0 ? 0 : this.countBall() - countStrike;
    return {countBall, countStrike};
  }

  countBall() {
    return this.userNumbers.reduce((acc, cur) => {
      if (this.computerNumbers.includes(cur)) {
        acc++;
      }
      return acc;
    }, 0);
  }

  countStrike() {
    return this.userNumbers.reduce((acc, cur, idx) => {
      if (cur === this.computerNumbers[idx]) {
        acc++;
      }
      return acc;
    }, 0);
  }
}

module.exports = Model;
