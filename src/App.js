const MissionUtils = require("@woowacourse/mission-utils");

const { Console, Random } = MissionUtils;

class App {
  #userAnswer;
  #answer;
  constructor() {
    this.#userAnswer = "";
    this.#answer = "";
    this.score = {};
  }
  play() {
    this.startMent();
    this.start();
  }
  startMent() {
    Console.print("숫자 야구 게임을 시작합니다.");
  }
  pickRandomAnswer() {
    while (this.#answer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!this.#answer.includes(number)) this.#answer += `${number}`;
    }
    this.#answer = [...this.#answer];
  }
  inputUserAnswer() {
    Console.readLine("숫자를 입력해주세요 : ", (answer) => {
      if (
        !answer.length === 3 ||
        !Number.isInteger(+answer) ||
        !Math.sign(answer) === -1 ||
        !(+answer >= 123 && +answer <= 987)
      )
        throw new Error("잘못된 값을 입력하셨습니다.");

      this.#userAnswer = [...answer];
      this.score = {};

      this.getScore();
      this.printScore();
      this.restart();
    });
  }
  getScore() {
    const { score } = this;

    this.#userAnswer.forEach((num, idx) => {
      if (this.#answer[idx] === num) score.strike = score.strike + 1 || 1;
      if (this.#answer[idx] !== num && this.#answer.includes(num))
        score.ball = score.ball + 1 || 1;
    });
  }
  printScore() {
    const { strike, ball } = this.score;
    const ballScore = `${ball ? `${ball}볼 ` : ""}`;
    const strikeScore = `${strike ? `${strike}스트라이크 ` : ""}`;
    const nothingScore = `${!strike && !ball ? "낫싱" : ""}`;

    Console.print(ballScore + strikeScore + nothingScore);
    if (strike === 3)
      Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    else this.inputUserAnswer();
  }
  restart() {
    Console.readLine(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
      (answer) => {
        if (answer === "1") {
          this.#answer = "";
          this.start();
          return;
        }
        if (answer === "2") {
          Console.print("게임 종료");
          Console.close();
          return;
        }
        Console.close();
        throw new Error("잘못된 값을 입력하셨습니다.");
      }
    );
  }
  start() {
    this.pickRandomAnswer();
    this.inputUserAnswer();
  }
}

const app = new App();
app.play();

module.exports = App;
