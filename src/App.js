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
  play() {}
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
    });
  }
}

const app = new App();
app.play();

// module.exports = App;
