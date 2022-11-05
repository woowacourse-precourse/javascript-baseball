const MissionUtils = require("@woowacourse/mission-utils");

class App {
  static printGameStart(){
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
  }

  play() {
    App.printGameStart();
  }
}

module.exports = App;
