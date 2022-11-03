const { Console, Random } = require("@woowacourse/mission-utils");

class App {
  START = "숫자 야구 게임을 시작합니다.";
  END = "게임 종료";

  print(message, close = false) {
    Console.print(message);

    if (close) Console.close();
  }

  play() {
    this.print(this.START, true);
  }
}

const app = new App();
app.play();

module.exports = App;
