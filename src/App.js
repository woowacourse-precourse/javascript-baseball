const Game = require("./Game");
const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    const game = new Game();

    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");

    game.start();
  }
}

module.exports = App;
