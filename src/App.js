const { Console, Random } = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.answer = [];
    this.userAnswer;
  }

  initAnswer() {
    while (this.answer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!this.answer.includes(number)) {
        this.answer.push(number);
      }
    }
  }

  sendMessage(message) {
    Console.print(message);
  }

  requestAnswer(message) {
    Console.readLine(message, (answer) => {
      if (answer.length !== 3) throw new Error("입력 에러! 숫자 3자리를 입력해주세요!");
      this.userAnswer = answer.split("");
    });
  }

  play() {
    this.sendMessage("숫자 야구 게임을 시작합니다.");
    this.initAnswer();
    this.requestAnswer("숫자를 입력해주세요. : ");
  }
}

module.exports = App;
