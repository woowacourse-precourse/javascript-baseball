const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    let Randomnumber = ComputerRandomnumber();
  }
}

module.exports = App;
