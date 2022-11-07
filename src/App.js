const MissionUtils = require("@woowacourse/mission-utils");
class App {
  computerRandom() {
    const computer = MissionUtils.Random.pickNumberInRange(1, 9, 3);
    MissionUtils.Console.close();
    return computer;
  }
  play() {
    MissionUtils.Console.print("숫자 야구 게임 시작!");
  }
}

module.exports = App;
