const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    // START GAME
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
  }
}

module.exports = App;

const app = new App();
app.play();