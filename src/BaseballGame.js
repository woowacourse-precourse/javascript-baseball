const { Console } = require("@woowacourse/mission-utils");
const pickedNumberByComputer = require("./pickedNumberByComputer");
const input = require("./util/input");
const countStrikeBallNothing = require("./countStrikeBallNothing");
const resultsForCount = require("./resultsForCount");
const GameManager = require("./GameManager");

class BaseballGame {
  constructor() {
    this.pickedNumberByComputer = pickedNumberByComputer();
    this.threeStrike = false;
  }

  async isThreeStrike() {
    while (!this.threeStrike) {
      let pickedNumberByUser = await input("숫자를 입력해주세요 : ");
      let [strike, ball, nothing] = countStrikeBallNothing(
        pickedNumberByUser,
        this.pickedNumberByComputer
      );
      resultsForCount(strike, ball, nothing);
      if (strike === 3) this.threeStrike = true;
    }
    Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    new GameManager().restartOrEnd();
  }
}

module.exports = BaseballGame;
