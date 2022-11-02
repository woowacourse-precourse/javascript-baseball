const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    this.showStartMessage();
  }

  showStartMessage() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    MissionUtils.Console.close();
  }
}

const app = new App();
app.play();

module.exports = App;
