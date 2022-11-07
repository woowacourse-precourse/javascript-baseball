const { Random } = require("@woowacourse/mission-utils");
const Console = require("./Console");
const Input = require("./Input");

class App {
  constructor() {
    this.answer = [];
    this.userInput = "";
  }

  play() {
    if (this.answer.length === 0) {
      Console.print(Console.START);
      this.generateAnswer();
    }

    Console.readLine(Console.REQUEST_NUMBER, (userInput) => {
      if (Input.isValidGuess(userInput)) {
        this.userInput = userInput;
        Console.print(this.calculateCount(userInput));
      }
      if (this.isGameEnd()) {
        Console.print(Console.END);
        this.askPlayOrExit();
        return;
      }
      this.play();
    });
  }

  calculateCount(userInput) {
    const count = { strike: 0, ball: 0 };

    Array.from(userInput).forEach((number, index) => {
      if (this.answer.indexOf(Number(number)) === index) {
        count.strike += 1;
      } else if (this.answer.includes(Number(number))) {
        count.ball += 1;
      }
    });

    if (count.strike === 0 && count.ball === 0) {
      return "낫싱";
    } else if (count.strike === 0) {
      return `${count.ball}볼`;
    } else if (count.ball === 0) {
      return `${count.strike}스트라이크`;
    } else {
      return `${count.ball}볼 ${count.strike}스트라이크`;
    }
  }

  isGameEnd() {
    return Array.from(this.userInput)
      .map((char) => Number(char))
      .every((number, index) => number === this.answer[index]);
  }

  generateAnswer() {
    while (this.answer.length !== 0) this.answer.shift();
    while (this.answer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!this.answer.includes(number)) this.answer.push(number);
    }
  }

  askPlayOrExit() {
    Console.readLine(Console.AGAIN_OR_END, (userInput) => {
      Input.checkIsOneOrTwo(userInput);

      if (userInput === "1") {
        this.generateAnswer();
        this.play();
      } else {
        Console.close();
      }
    });
  }
}

module.exports = App;
