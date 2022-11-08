const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.computerNumber = [];
    this.userNumber = [];
  }

  play() {}

  startGameMessage() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다");
  }
}

const app = new App();
app.play();

module.exports = App;
