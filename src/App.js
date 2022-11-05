const GAMESTART_OR_RESTART = require('./gameSource/controller');
const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    GAMESTART_OR_RESTART.launchNewGame();
  }
}
const app = new App();
app.play();
module.exports = App;
