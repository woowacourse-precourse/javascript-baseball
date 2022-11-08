const progress = require("./progress");
const computerAnswer = require("./makeComputerAnswer");
const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    const PLAY_GAME = progress(computerAnswer());
  }
}

const app = new App();
app.play();

module.exports = App;
