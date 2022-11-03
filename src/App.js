const { Console } = require("@woowacourse/mission-utils");
class App {
  START = "숫자 야구 게임을 시작합니다.";
  REQUEST_NUMBER = "숫자를 입력해주세요 : ";
  END = "게임 종료";
  ANSWER = "";

  play() {
    this.print(this.START, true);
    this.ANSWER = this.makeBaseballGameAnswer();

    Console.readLine(this.REQUEST_NUMBER, (input) => {
      Console.close();
    });
  }

  print(message, close = false) {
    Console.print(message);
  }

  makeBaseballGameAnswer() {
    return Array.from({ length: 3 }, () => this.getRandomNumber(10)).join("");
  }

  getRandomNumber() {
    return Math.floor(Math.random() * 9 + 1);
  }
}

function startApp() {
  const app = new App();
  app.play();
}

startApp();

module.exports = App;
