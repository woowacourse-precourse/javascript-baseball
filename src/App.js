const { Console, Random } = require("@woowacourse/mission-utils");

class App {
  NUMBER = [];

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

  playerInput() {
    Console.readLine("숫자를 입력해주세요 : ", (input) => {
      this.compareNumber(input);
    });
  }
}

module.exports = App;
