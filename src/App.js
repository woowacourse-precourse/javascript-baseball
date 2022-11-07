const MissionUtils = require("@woowacourse/mission-utils");
const GAME_START = '숫자 야구 게임을 시작합니다.';
const RESTART = '숫자 야구 게임을 재시작합니다.';

class App {
  play() {
    MissionUtils.Console.print(GAME_START);
    this.startGame();
  }
}

module.exports = App;
