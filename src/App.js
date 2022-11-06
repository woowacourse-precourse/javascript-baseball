const { Random, Console } = require("@woowacourse/mission-utils");
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

  readInput(solution) {
    Console.readLine(MESSAGE.USER_INPUT_REQUEST, (userinput) => {
      const inputError = new UserInput(userinput);
      if (!inputError.checkAllUserInput) {
        return this.throwError();
      }
      Console.close();
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
