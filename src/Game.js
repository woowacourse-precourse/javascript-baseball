const MissionUtils = require("@woowacourse/mission-utils");
const { MESSAGE } = require("./lib/constants");

class Game {
  play() {
    this.start();
  }

  start() {
    this.printIntro();
  }

  printIntro() {
    this.printMessage(MESSAGE.INTRO);
  }

  printMessage(message) {
    MissionUtils.Console.print(message);
  }
}

module.exports = Game;
