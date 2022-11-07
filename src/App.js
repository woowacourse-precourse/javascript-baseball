const { Random } = require("@woowacourse/mission-utils");
const Console = require("./Console");
const Input = require("./Input");

class App {
  constructor() {
    this.answer = "";
    this.input = "";
  }

  play() {
    if (!this.answer.length) {
      Console.print(Console.START);
      this.makeAnswer();
    }

    Console.readLine(Console.INPUT, (input) => {
      if (Input.isValidInput(input)) {
      }
    });
  }

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
