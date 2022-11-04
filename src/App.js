const { Console } = require("@woowacourse/mission-utils");

function inputNumbers(comment) {
  return new Promise((resolve) => {
    Console.readLine(comment, resolve);
  });
}

class App {

  play() {
    this.startGame();
  }

  async startGame() {
    Console.print("숫자 야구 게임을 시작합니다.");
    await this.baseballGameStart();
    Console.close();
  }

  async baseballGameStart() {
    const beforeValidNumbers = await inputNumbers("숫자를 입력해주세요 : ");
    Console.print(beforeValidNumbers);
  }
}

module.exports = App;

function check() {
  const app = new App();

  app.play();
  return 0;
}

check();