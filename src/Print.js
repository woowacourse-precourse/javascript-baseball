const MissionUtils = require("@woowacourse/mission-utils");
class Print {
  printPlayGame(totalCountBall, totalCountStrike) {
    this.printNothing(totalCountBall, totalCountStrike);
    this.printStrike(totalCountBall, totalCountStrike);
    this.printBall(totalCountBall, totalCountStrike);
    this.printBallAndStrike(totalCountBall, totalCountStrike);
  }
  printNothing(totalCountBall, totalCountStrike) {
    if (totalCountBall === 0 && totalCountStrike === 0) {
      return MissionUtils.Console.print("낫싱");
    }
  }

  printStrike(totalCountBall, totalCountStrike) {
    if (totalCountBall === 0 && totalCountStrike === 3) {
      MissionUtils.Console.print(`${totalCountStrike}스트라이크`);
      return MissionUtils.Console.print(
        "3개의 숫자를 모두 맞히셨습니다! 게임 종료"
      );
    } else if (totalCountBall === 0 && totalCountStrike) {
      return MissionUtils.Console.print(`${totalCountStrike}스트라이크`);
    }
  }
  printBall(totalCountBall, totalCountStrike) {
    if (totalCountStrike === 0 && totalCountBall) {
      return MissionUtils.Console.print(`${totalCountBall}볼`);
    }
  }
  printBallAndStrike(totalCountBall, totalCountStrike) {
    if (totalCountBall && totalCountStrike) {
      return MissionUtils.Console.print(
        `${totalCountBall}볼 ${totalCountStrike}스트라이크`
      );
    }
  }
}
module.exports = Print;
