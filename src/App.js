const MissionUtils = require("@woowacourse/mission-utils");

function printMsg(message) {
  MissionUtils.Console.print(message);
}

class App {
  play() {
    printMsg("숫자 야구 게임을 시작합니다.");
  }
}

module.exports = App;
