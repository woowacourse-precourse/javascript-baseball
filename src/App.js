const { Console } = require("@woowacourse/mission-utils");
const BaseballGame = require("./BaseballGame");

class App {
  constructor() {
    this.game = new BaseballGame();
  }

  play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    this.game.startGame();
  }
}

module.exports = App;
