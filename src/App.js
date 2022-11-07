const MissionUtils = require("@woowacourse/mission-utils");

class App {
  // 게임 시작
  play() {
    this.computer = [];
    this.user = [];

    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.computerSet();
    this.userPlay();
  }
}

const app = new App();
app.play();

module.exports = App;
