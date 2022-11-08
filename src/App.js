const MissionUtils = require("@woowacourse/mission-utils");
const init = require('./game/init');

class App {

  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    init();
  }

}

module.exports = App;
