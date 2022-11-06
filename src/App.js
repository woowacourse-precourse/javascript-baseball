const { Console, Random } = require("@woowacourse/mission-utils");
const MESSAGE = require("./constants/message");

class App {
  constructor() {
    this.answer = [];
    this.userAnswer;
  }

  initAnswer() {
    this.answer = [];
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
      if (answer.length !== 3) throw new Error(MESSAGE.ERROR.ANSWER_LENGTH_MUST_BE_THREE);
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
      this.sendMessage(MESSAGE.COMPARE_ANSWER.THREE_STRIKE);
      this.sendMessage(MESSAGE.GAME_PROGRESS.END);
      Console.readLine(MESSAGE.REQUEST.IS_CONTINUE, (answer) => {
        if (answer === "1") {
          this.play();
          return;
        }

        if (answer === "2") {
          Console.print(MESSAGE.GAME_PROGRESS.SHUTDOWN);
          Console.close();
        }
      });

      return;
    }

    if (strike !== 0 || ball !== 0) {
      this.sendMessage(`${ball ? `${ball}볼 ` : ""}${strike ? `${strike}스트라이크` : ""}`);
      this.requestAnswer(MESSAGE.REQUEST.USER_ANSWER);
      return;
    }

    this.sendMessage("낫싱");
    this.requestAnswer(MESSAGE.REQUEST.USER_ANSWER);
  }

  play() {
    this.sendMessage(MESSAGE.GAME_PROGRESS.START);
    this.initAnswer();
    this.sendMessage(this.answer);
    this.requestAnswer(MESSAGE.REQUEST.USER_ANSWER);
  }
}

const app = new App();
app.play();

module.exports = App;
