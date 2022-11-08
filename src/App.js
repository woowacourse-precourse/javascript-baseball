const Game = require("./Game");
const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    const game = new Game();

    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");

    const randomNumber = game.setRandomNumber();
    game.start(randomNumber);
  }
}

module.exports = App;
