const MissionUtils = require("@woowacourse/mission-utils");
class App {
  print(message) {
    MissionUtils.Console.print(message);
  }
  play() {
    this.print("숫자 야구 게임을 시작합니다.");
  }
}

module.exports = App;
