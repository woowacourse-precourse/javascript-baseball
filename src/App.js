const { Console } = require("@woowacourse/mission-utils");
const GAME_MESSAGE = require("./util/Constant");
const makeNumber = require("./MakeNumber");
const isValidNum = require("./IsValideNum");
const { makeComment, makeCount } = require("./MakeCount");

class App {
  constructor() {
    this.answer = makeNumber();
  }

  makeOutput() {
    const { strike, ball } = makeCount(this.answer, this.userInput);
    const comment = makeComment(strike, ball);
    return comment;
  }

  checkInput() {
    if (isValidNum(this.userInput)) {
      Console.print(this.makeOutput());
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
