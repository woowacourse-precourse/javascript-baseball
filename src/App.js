const { Console, Random } = require("@woowacourse/mission-utils");
const { THREE_TIMES, ASK_CONTINUE, ANSWER_NUMBERS } = require("./constants/constant");
const MESSAGE = require("./constants/message");
const validateAnswer = require("./exceptions/exception");

class App {
  constructor() {
    this.answer = [];
    this.userAnswer;
  }

  initAnswer() {
    this.answer = [];
    while (this.answer.length < 3) {
      const number = Random.pickNumberInRange(ANSWER_NUMBERS.MIN_NUM, ANSWER_NUMBERS.MAX_NUM);
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
      validateAnswer(answer);

      this.userAnswer = answer.split("").map(Number);

      const [strike, ball] = this.compareAnswer(this.answer, this.userAnswer);
      this.compareAnswerResult(strike, ball);
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

    return [strike, ball];
  }

  compareAnswerResult(strike, ball) {
    if (strike === THREE_TIMES) {
      this.sendMessage(MESSAGE.COMPARE_ANSWER.THREE_STRIKE);
      this.sendMessage(MESSAGE.GAME_PROGRESS.END);
      Console.readLine(MESSAGE.REQUEST.IS_CONTINUE, (answer) => this.askContinueGame(answer));
      return;
    }

    if (strike !== 0 || ball !== 0) {
      this.sendMessage(`${ball ? `${ball}볼 ` : ""}${strike ? `${strike}스트라이크` : ""}`);
      this.requestAnswer(MESSAGE.REQUEST.USER_ANSWER);
      return;
    }

    this.sendMessage(MESSAGE.COMPARE_ANSWER.NOTHING);
    this.requestAnswer(MESSAGE.REQUEST.USER_ANSWER);
  }

  askContinueGame(answer) {
    if (answer === ASK_CONTINUE.YES) {
      this.play();
      return;
    }

    if (answer === ASK_CONTINUE.NO) {
      Console.print(MESSAGE.GAME_PROGRESS.SHUTDOWN);
      Console.close();
    }
  }

  play() {
    this.sendMessage(MESSAGE.GAME_PROGRESS.START);
    this.initAnswer();
    this.requestAnswer(MESSAGE.REQUEST.USER_ANSWER);
  }
}

const app = new App();
app.play();

module.exports = App;
