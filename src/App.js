const { Console } = require("@woowacourse/mission-utils");

class App {
  start() {
    Console.print("숫자 야구 게임을 시작합니다.");
  }

  play() {
    this.start();
  }
}

const app = new App();
app.play();

module.exports = App;
