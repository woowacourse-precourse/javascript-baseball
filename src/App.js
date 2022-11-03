const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.inputNum();
  }
}

module.exports = App;

const app = new App();
app.play();
