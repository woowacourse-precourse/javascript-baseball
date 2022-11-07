const { Console } = require("@woowacourse/mission-utils");
const GAME_MESSAGE = require("./util/Constant");
const makeNumber = require("./MakeNumber");
const isValidNum = require("./IsValideNum");
const { makeComment, makeCount } = require("./MakeCount");

class App {
  throwErr() {
    throw new Error(MESSAGE.INPUT_EXCEPTION);
  }
  makeOutput() {
    const { strike, ball } = makeCount(this.answer, this.userInput);
    const comment = makeComment(strike, ball);

    Console.print(comment);

    if (strike !== 3) {
      this.inputAnswer();
    } else {
      this.gameEnd();
    }
  }

  checkInput() {
    if (!isValidNum(this.userInput)) {
      this.throwErr();
    }
    this.makeOutput();
  }

  inputAnswer() {
    Console.readLine(GAME_MESSAGE.INPUT_MESSAGE, (input) => {
      this.userInput = Array.from(String(input), Number);
      this.checkInput();
    });
  }

  gameEnd() {
    Console.print(GAME_MESSAGE.END_MESSAGE);
    Console.readLine(GAME_MESSAGE.INTENTION_MESSAGE, (input) => {
      if (input === "1") return this.gameStart();
      if (input === "2") return Console.close();
      return throwErr();
    });
  }
  gameStart() {
    this.answer = makeNumber();
    this.inputAnswer();
  }

  play() {
    Console.print(GAME_MESSAGE.START_MESSAGE);
    this.gameStart();
  }
}
const baseball = new App();
baseball.play();
module.exports = App;
