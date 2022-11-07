const { Console } = require("@woowacourse/mission-utils");
const GAME_MESSAGE = require("./util/Constant");
const makeNumber = require("./MakeNumber");
const isValidNum = require("./IsValideNum");

class App {
  constructor() {
    this.answer = makeNumber();
  }

  checkInput() {
    if (isValidNum(this.userInput)) {
      this.inputAnswer();
    } else {
      throw new Error();
    }
  }

  inputAnswer() {
    Console.readLine(GAME_MESSAGE.INPUT_MESSAGE, (input) => {
      this.userInput = Array.from(String(input), Number);
      this.checkInput();
    });
  }

  play() {
    Console.print(GAME_MESSAGE.START_MESSAGE);
    this.inputAnswer();
  }
}
const baseball = new App();
baseball.play();
module.exports = App;
