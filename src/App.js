const MissionUtils = require("@woowacourse/mission-utils");

class App {
  startGame() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
  }

  play() {
    this.startGame();
  }
}

module.exports = App;
