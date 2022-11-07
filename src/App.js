const { Console } = require("@woowacourse/mission-utils");
const utilFun = require("./utils/utils");
const { ANNOUNCEMENT_MESSAGE, GAME_MESSAGE } = require("./constant/constant");

class App {
  constructor() {
    this.computerRandomThreeNumber = 0;
    this.userRandomThreeNumber = 0;
  }

  init() {
    this.computerRandomThreeNumber = utilFun.computerUniqueThreeNumbers();
  }

  baseballGameWin() {}

  baseballGameStart() {
    const compareResult = utilFun.compareComputerAndUser(
      this.computerRandomThreeNumber,
      this.userRandomThreeNumber
    );
    MissionUtils.Console.print(compareResult);
    if (compareResult === GAME_MESSAGE.NOTHING) {
      this.getUserNumbers();
      return;
    }
    if (compareResult === GAME_MESSAGE.WIN) {
      this.baseballGameWin();
    } else {
      this.getUserNumbers();
    }
  }

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
