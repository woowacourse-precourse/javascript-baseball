const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {}
  getRandomBaseballNumber() {
    const computer = new Set();
    while (computer.size < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      computer.add(number);
    }
    return Number(Array.from(computer).join(""));
  }
  play() {
    this.getRandomBaseballNumber();
  }
}

module.exports = App;
