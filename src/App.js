const MissionUtils = require("@woowacourse/mission-utils");
class App {
  play() {
    const random_num = MissionUtils.Random.pickUniqueNumbersInRange([1, 9, 3]);

    MissionUtils.console.print("숫자 야구 게임을 시작합니다.");
  }
}

module.exports = App;
