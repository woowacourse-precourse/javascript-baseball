const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.randomAnswer = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
  }

  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
  }
}

module.exports = App;
