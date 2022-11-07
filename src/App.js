const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);

    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    MissionUtils.Console.close();
  }
}

module.exports = App;
