const { Random } = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.answer = "";
    this.input = "";
  }

  play() {}

  isGameOver() {
    return this.input
      .split("")
      .map(Number)
      .every((num, idx) => num === this.answer[idx]);
  }
}

module.exports = App;
