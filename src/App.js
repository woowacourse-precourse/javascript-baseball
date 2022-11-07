const { Console } = require("@woowacourse/mission-utils");
const MESSAGE = require("../constant/message");
const UserInput = require("./UserInput");
const Solution = require("./Solution");

class App {
  constructor() {
    this.print(MESSAGE.GAME_START);
    this.solution = new Solution();
  }

  print(message) {
    return Console.print(message);
  }

  getStrikeBallCount(solution, userinput) {
    let strike = 0;
    let ball = 0;

    for (let index = 0; index < 3; index++) {
      strike += solution[index] === userinput[index];
    }

    for (let inputValue of userinput) {
      ball += solution.includes(inputValue);
    }
    ball -= strike;

    return { strike, ball };
  }

  getResultMessage(strike, ball) {
    if (!strike && ball) return `${ball}볼`;
    if (strike && !ball) return `${strike}스트라이크`;
    if (strike && ball) return `${ball}볼 ${strike}스트라이크`;

    return "낫싱";
  }

  askRestart() {
    this.print(MESSAGE.GAME_END);

    Console.readLine(MESSAGE.RESTART, (userinput) => {
      if (userinput !== "1" && userinput !== "2") {
        return this.throwError();
      }
      if (userinput === "1") {
        return this.play();
      }
      this.print(MESSAGE.END);
      return Console.close();
    });
  }

  readInput(solution) {
    Console.readLine(MESSAGE.USER_INPUT_REQUEST, (userinput) => {
      const inputError = new UserInput(userinput);
      inputError.checkAllUserInput();
      const { strike, ball } = this.getStrikeBallCount(solution, userinput);
      this.print(this.getResultMessage(strike, ball));

      if (strike !== 3) {
        return this.readInput(solution);
      }
      this.askRestart();
    });
  }

  play() {
    const solution = this.solution.pickNumbers();
    this.readInput(solution);
  }

  throwError() {
    throw new Error(MESSAGE.ERROR);
  }
}

const app = new App();
app.play();

module.exports = App;
