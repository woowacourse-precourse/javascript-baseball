const { Random, Console } = require("@woowacourse/mission-utils");
const MESSAGE = require("./constant/message.js");
const UserInput = require("./UserInput");

class App {
  constructor() {
    this.print(MESSAGE.GAME_START);
    this.userinput = this.readInput();
  }

  print(message) {
    return Console.print(message);
  }

  pickNumbers() {
    return Random.pickUniqueNumbersInRange(1, 9, 3);
  }

  readInput() {
    Console.readLine(MESSAGE.USER_INPUT_REQUEST, (userinput) => {
      Console.close();
      const inputError = new UserInput(userinput);
      if (!inputError.checkAllUserInput) {
        return this.throwError();
      }
    });
  }

  play() {
    this.inGame();
    return;
  }

  throwError() {
    throw new Error();
  }
}

const app = new App();
app.play();

module.exports = App;
