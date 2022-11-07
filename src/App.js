const { Console } = require("@woowacourse/mission-utils");

class App {
  play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    this.startGame();
  }

  startGame() {}
}

module.exports = App;
