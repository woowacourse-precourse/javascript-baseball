const { Random } = require("@woowacourse/mission-utils");
const Console = require("./Console");
const Condition = require("./Condition");

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
      if (Condition.isValidInput(input)) {
        this.input = input;
        Console.print(this.makeResult(input));
      }

      if (this.isGameOver()) {
        Console.print(Console.END);
        this.makeNotice();
        return;
      }
      this.play();
    });
  }

  makeAnswer() {
    if (this.answer.length) this.answer = "";
    while (this.answer.length < 3) {
      const randNum = Random.pickNumberInRange(1, 9);
      if (!this.answer.includes(randNum)) this.answer += randNum;
    }
  }

  makeResult(input) {
    const initialBoard = { strike: 0, ball: 0 };

    const scoreBoard = input.split("").reduce((acc, cur, idx) => {
      if (this.answer[idx] === cur) return { ...acc, strike: acc.strike + 1 };
      if (this.answer.includes(cur)) return { ...acc, ball: acc.ball + 1 };
      return acc;
    }, initialBoard);

    const { strike, ball } = scoreBoard;

    if (!strike && !ball) return "낫싱";
    else if (!strike) return ball + "볼";
    else if (!ball) return strike + "스트라이크";
    else return ball + "볼 " + strike + "스트라이크";
  }

  makeNotice() {
    Console.readLine(Console.END_NOTICE, (input) => {
      Condition.checkOneOrTwo(input);
      if (input === "1") {
        this.makeAnswer();
        this.play();
      } else {
        Console.close();
      }
    });
  }

  isGameOver() {
    return this.input.split("").every((num, idx) => num === this.answer[idx]);
  }
}

module.exports = App;
