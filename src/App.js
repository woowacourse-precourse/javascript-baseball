const MissionUtils = require("@woowacourse/mission-utils");

const GAME_START_MESSAGE = "숫자 야구 게임을 시작합니다.";

class App {
  printGameStartMessage() {
    MissionUtils.Console.print(GAME_START_MESSAGE);
  }

  play() {
    this.printGameStartMessage();
  }
}

const app = new App();
app.play();

module.exports = App;
