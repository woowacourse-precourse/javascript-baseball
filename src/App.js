const { Console } = require("@woowacourse/mission-utils");
const utilFun = require("./utils/utils");
const { ANNOUNCEMENT_MESSAGE } = require("./constant/constant");

class App {
  constructor() {
    this.computerRandomThreeNumber = 0;
    this.userRandomThreeNumber = 0;
  }

  init() {
    this.computerRandomThreeNumber = utilFun.computerUniqueThreeNumbers();
  }

  baseballGameStart() {}

  getUserNumbers() {
    Console.readLine(ANNOUNCEMENT_MESSAGE.INPUT, (userAnswer) => {
      utilFun.checkUserValid(userAnswer);
      this.userRandomThreeNumber = userAnswer;
      if (userAnswer.length > 0) this.baseballGameStart();
    });
  }

  play() {
    this.init();
    this.getUserNumbers();
  }
}

module.exports = App;
