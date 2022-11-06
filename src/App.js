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
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (userInput) => {
      this.checkInputValidity(userInput);
      this.userDigits = [...userInput];
    });
  }

  checkInputValidity(userInput) {
    if (userInput != parseInt(userInput) || userInput.length !== 3) {
      throw new Error("input should be three digits");
    }
  }

  play() {
    this.generateThreeDigits();
    this.getUserDigits();
  }
}

module.exports = App;
