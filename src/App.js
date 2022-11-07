const MissionUtils = require("@woowacourse/mission-utils");
const { MESSAGES } = require("./constants");
const { playGame } = require("./modules/playGame");

class App {
  play() {
    this.startGame();
    playGame();
  }

  startGame() {
    MissionUtils.Console.print(MESSAGES.START);
  }
}

module.exports = App;
