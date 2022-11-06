const { Console } = require("@woowacourse/mission-utils");

class App {
  play() {
    this.gameStart();
  }

  gameStart() {
    Console.print("숫자 야구 게임을 시작합니다");
  }
}

const app = new App();
app.play();

module.exports = App;
