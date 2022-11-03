const MissionUtils = require("@woowacourse/mission-utils");
class App {
  print(message) {
    MissionUtils.Console.print(message);
  }
  pickComputerNum() {
    return MissionUtils.Random.pickNumberInRange(1, 9);
  }
  play() {
    this.print("숫자 야구 게임을 시작합니다.");
    const computerNum = this.pickComputerNum();
  }
}

module.exports = App;
