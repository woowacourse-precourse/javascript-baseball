const { Console, Random } = require("@woowacourse/mission-utils");

class App {
  print(message) {
    Console.print(message);
    Console.close();
  }

  play() {
    this.print("숫자 야구 게임을 시작합니다.");
  }
}

const app = new App();
app.play();

module.exports = App;
