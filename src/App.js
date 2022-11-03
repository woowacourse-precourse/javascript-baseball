const { Console, Random } = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.computerAnswer = [];
    this.userAnswer;
  }

  play() {
    Console.print("숫자 야구 게임을 시작합니다.");

    while (this.computerAnswer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!this.computerAnswer.includes(number)) {
        this.computerAnswer.push(number);
      }
    }

    Console.readLine("숫자를 입력해주세요 : ", (answer) => {
      this.userAnswer = answer;
    });
  }
}

module.exports = App;
