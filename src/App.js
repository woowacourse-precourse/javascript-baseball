const { Console } = require("@woowacourse/mission-utils");
class App {
  START = "숫자 야구 게임을 시작합니다.";
  REQUEST_NUMBER = "숫자를 입력해주세요 : ";
  END = "게임 종료";

  constructor() {}

  print(message, close = false) {
    Console.print(message);
  }

  play() {
    this.print(this.START, true);

    Console.readLine(this.REQUEST_NUMBER, (input) => {
      console.log(input, "?");
      Console.close();
    });
  }
}

function startApp() {
  const app = new App();
  app.play();
}

startApp();

module.exports = App;
