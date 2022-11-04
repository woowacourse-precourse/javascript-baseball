const { Console } = require("@woowacourse/mission-utils");


class App {

  play() {
    this.startGame();
  }

  async startGame() {
    Console.print("숫자 야구 게임을 시작합니다.");
    await this.baseballGameStart();
    Console.close();
  }

}

module.exports = App;

function check() {
  const app = new App();

  app.play();
  return 0;
}

check();