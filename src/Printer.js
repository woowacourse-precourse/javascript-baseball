const MissionUtils = require("@woowacourse/mission-utils");
const { COUNT_MESSAGE, GAME_MESSAGE } = require("./constant");

class Printer {
  printPlayGame(totalCountBall, totalCountStrike) {
    this.printNothing(totalCountBall, totalCountStrike);
    this.printStrike(totalCountBall, totalCountStrike);
    this.printBall(totalCountBall, totalCountStrike);
    this.printBallAndStrike(totalCountBall, totalCountStrike);
  }

  printNothing(totalCountBall, totalCountStrike) {
    if (totalCountBall === 0 && totalCountStrike === 0) {
      return MissionUtils.Console.print(COUNT_MESSAGE.nothing);
    }
  }

  printStrike(totalCountBall, totalCountStrike) {
    if (totalCountBall === 0 && totalCountStrike) {
      MissionUtils.Console.print(`${totalCountStrike}${COUNT_MESSAGE.strike}`);
    }
    totalCountStrike === 3 && MissionUtils.Console.print(GAME_MESSAGE.correct);
  }

  printBall(totalCountBall, totalCountStrike) {
    if (totalCountStrike === 0 && totalCountBall) {
      return MissionUtils.Console.print(`${totalCountBall}${COUNT_MESSAGE.ball}`);
    }
  }

  printBallAndStrike(totalCountBall, totalCountStrike) {
    if (totalCountBall && totalCountStrike) {
      return MissionUtils.Console.print(
        `${totalCountBall}${COUNT_MESSAGE.ball} ${totalCountStrike}${COUNT_MESSAGE.strike}`
      );
    }
  }
}
module.exports = Printer;
