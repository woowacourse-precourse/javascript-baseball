const checkProgress = require("./checkProgress");
const progress = require("./progress");
const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    let playing = false;
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    while (!playing) {
      const PLAY_GAME = progress();
      playing = PLAY_GAME;
    }
  }
}

const app = new App();
app.play();

module.exports = App;
