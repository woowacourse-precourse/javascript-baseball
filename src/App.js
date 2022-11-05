const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.count = this.generateCount();
  }
  play() {}

  gameStart() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
  }

  generateCount() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3).reduce(
      (acc, cur) => acc + cur,
      ""
    );
  }
}

module.exports = App;
