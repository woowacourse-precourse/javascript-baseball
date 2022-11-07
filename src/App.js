const { Console, Random } = require("@woowacourse/mission-utils");

class App {
  start() {
    Console.print("숫자 야구 게임을 시작합니다.");
    const computerRandomNumber = Random.pickUniqueNumbersInRange(1, 9, 3).join(
      ""
    );
  }

  play() {
    this.start();
  }
}

const app = new App();
app.play();

module.exports = App;
