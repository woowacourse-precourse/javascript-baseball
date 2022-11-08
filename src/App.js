const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.answer = this.getComputerNum();
  }

  play() {}

  getComputerNum() {
    const randomNum = [];
    while (randomNum.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!randomNum.includes(number)) randomNum.push(number);
    }
    return randomNum;
  }
}

module.exports = App;
