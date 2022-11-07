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
}

const app = new App();
app.play();

// module.exports = App;
