const Game = require("./Game");
const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    const game = new Game();
    const randomNumber = game.setRandomNumber();
    let isContinue = true;

    MissionUtils.Console.print(randomNumber);

    while (isContinue) {
      game.start(randomNumber);

      isContinue = game.over();
    }
  }
}

module.exports = App;
