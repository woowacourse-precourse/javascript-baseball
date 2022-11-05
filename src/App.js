const { Console, Random } = require("@woowacourse/mission-utils");

class App {
  play() {
    this.start();
  }

  start() {
    Console.print("숫자 야구 게임을 시작합니다.");
  }
}

module.exports = App;
