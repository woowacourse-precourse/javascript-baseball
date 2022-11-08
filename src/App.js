const MissionUtils = require("@woowacourse/mission-utils");
const Console = MissionUtils.Console;

class App {
  openingOutput() {
    Console.print('숫자 야구 게임을 시작합니다.');
    Console.close();
  }

  play() {
    this.openingOutput();
  }
}

module.exports = App;
