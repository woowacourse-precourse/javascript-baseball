const { Console, Random } = require("@woowacourse/mission-utils");

class App {
  let NUMBER = [];

  play() {
    this.start();
  }

  start() {
    Console.print("숫자 야구 게임을 시작합니다.");
  }

  randomNum() {
    NUMBER = pickUniqueNumbersInRange(1, 9, 3);

    return NUMBER;
  }
}

module.exports = App;
