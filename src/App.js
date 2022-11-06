const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.threeDigits = [0, 0, 0];
    this.userDigits = [0, 0, 0];
    this.score = { strikes: 0, balls: 0 };
  }

  generateThreeDigits() {
    this.threeDigits = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
  }

  getUserDigits() {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (answer) => {
      this.userDigits = [...answer];
    });
  }

  play() {
    this.generateThreeDigits();
    this.getUserDigits();
  }
}

module.exports = App;
