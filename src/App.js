const MissionUtils = require("@woowacourse/mission-utils");
const game = require("./Game");

class App {
  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    game();
  }
}

const app = new App();
app.play();

module.exports = App;
