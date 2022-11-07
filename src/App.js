const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {}

  getRandomNum() {
    return MissionUtils.Random.pickNumberInRange(1, 9);
  }

  getComputerNum() {
    let computerNum = [];

    let num;

    while (computerNum.length < 3) {
      num = this.getRandomNum();
      if (!computerNum.includes(num)) {
        computerNum.push(num);
      }
    }

    return computerNum;
  }

  printGameMsg(message) {
    MissionUtils.Console.print(message);
  }
}

module.exports = App;
