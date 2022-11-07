const { Console } = require("@woowacourse/mission-utils");
const GAME_MESSAGE = require("./util/Constant");
const makeNumber = require("./MakeNumber");
const isValidNum = require("./IsValideNum");

class App {
  constructor() {
    this.answer = makeNumber();
  }

  checkInput(data) {
    if (isValidNum(data)) {
      this.inputAnswer();
    } else {
      throw new Error();
    }
  }

  inputAnswer() {
    Console.readLine(GAME_MESSAGE.INPUT_MESSAGE, (input) => {
      this.checkInput(input);
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
