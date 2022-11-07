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
    let ball = 0,
      strike = 0;

    Array.from(userInput).forEach((number, index) => {
      if (this.answer.indexOf(Number(number)) === index) {
        strike += 1;
      } else if (this.answer.includes(Number(number))) {
        ball += 1;
      }
    });

    if (strike === 0 && ball === 0) {
      return "낫싱";
    } else if (strike === 0) {
      return `${ball}볼`;
    } else if (ball === 0) {
      return `${strike}스트라이크`;
    } else {
      return `${ball}볼 ${strike}스트라이크`;
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
