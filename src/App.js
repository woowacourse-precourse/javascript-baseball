const Game = require("./Game");
const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    const game = new Game();

    let isContinue = true;

    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");

    while (isContinue) {
      const randomNumber = game.setRandomNumber();
      isContinue = game.start(randomNumber);
    }
  }
}

module.exports = App;
