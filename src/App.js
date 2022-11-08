const MissionUtils = require("@woowacourse/mission-utils");

class App {
  gameStartMessage() {
    return MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
  }

  play() {
    this.gameStartMessage();
  }
}

const app = new App();
app.play();

module.exports = App;
