const MissionUtils = require("@woowacourse/mission-utils");

const mConsole = MissionUtils.Console;
const mRandom = MissionUtils.Random;

class App {
  play() {
    this.startGame();
  }

  startGame() {
    mConsole.print("숫자 야구 게임을 시작합니다.");
  }
}

const app = new App();
app.play();

module.exports = App;
