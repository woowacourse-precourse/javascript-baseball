const { Console } = require("@woowacourse/mission-utils");
const utilFun = require("./utils/utils");
const {
  ERROR_MESSAGE,
  ANNOUNCEMENT_MESSAGE,
  GAME_MESSAGE,
} = require("./constant/constant");

class App {
  constructor() {
    this.computerRandomThreeNumber = 0;
    this.userRandomThreeNumber = 0;
  }

  init() {
    this.computerRandomThreeNumber = utilFun.computerUniqueThreeNumbers();
  }

  baseballGameWin() {
    Console.readLine(ANNOUNCEMENT_MESSAGE.RESTART.MESSAGE, (answer) => {
      if (answer === ANNOUNCEMENT_MESSAGE.RESTART.START) {
        this.play();
      } else if (answer === ANNOUNCEMENT_MESSAGE.RESTART.FINISH) {
        Console.print(ANNOUNCEMENT_MESSAGE.END);
        Console.close();
      } else {
        throw ERROR_MESSAGE.IS_RESTART;
      }
    });
  }

  baseballGameStart() {
    const compareResult = utilFun.compareComputerAndUser(
      this.computerRandomThreeNumber,
      this.userRandomThreeNumber
    );
    Console.print(compareResult);
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
