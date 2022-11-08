const BaseballGame = require("./BaseballGame.js");
const { Console } = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.baseballGame = new BaseballGame();
  }

  play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    this.baseballGame.startGame();
  }
}

module.exports = App;
