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
      this.userAnswer = answer.split("").map(Number);

      this.compareAnswer(this.answer, this.userAnswer);
    });
  }

  compareAnswer(answer, userAnswer) {
    let strike = 0;
    let ball = 0;

    userAnswer.forEach((number, index) => {
      if (number === answer[index]) {
        strike++;
        return;
      }

      if (answer.includes(number)) {
        ball++;
        return;
      }
    });

    if (strike === 3) {
      this.sendMessage("3스트라이크");
      this.sendMessage("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      Console.readLine("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.", (answer) => {
        if (answer === "1") {
          this.play();
        }
        if (answer === "2") {
          Console.print("게임을 종료합니다");
          Console.close();
        }
      });

      return;
    }

    if (strike !== 0 || ball !== 0) {
      this.sendMessage(`${ball ? `${ball}볼 ` : ""}${strike ? `${strike}스트라이크` : ""}`);
      this.requestAnswer("숫자를 입력해주세요. : ");
      return;
    }

    this.sendMessage("낫싱");
  }

  play() {
    this.sendMessage("숫자 야구 게임을 시작합니다.");
    this.initAnswer();
    this.requestAnswer("숫자를 입력해주세요. : ");
  }
}

const app = new App();
app.play();

module.exports = App;
