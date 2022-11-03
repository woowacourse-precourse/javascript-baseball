const { Console } = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.answer;
  }

  play() {
    Console.print("숫자 야구 게임을 시작합니다.");

    Console.readLine("숫자를 입력해주세요 : ", (answer) => {
      this.answer = answer;
    });
  }
}

module.exports = App;
