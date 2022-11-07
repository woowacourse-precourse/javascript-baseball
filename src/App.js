const { Random } = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.answer = "";
    this.input = "";
  }

  play() {}

  makeAnswer() {
    if (this.answer.length) this.answer = "";
    while (this.answer.length < 3) {
      const randNum = Random.pickNumberInRange(1, 9);
      if (!this.answer.includes(randNum)) this.answer += randNum;
    }
  }

  isGameOver() {
    return this.input
      .split("")
      .map(Number)
      .every((num, idx) => num === this.answer[idx]);
  }
}

module.exports = App;
