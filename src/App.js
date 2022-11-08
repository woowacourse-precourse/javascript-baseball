const { Console } = require("@woowacourse/mission-utils");
const GAME_MESSAGE = require("./util/Constant");
const makeNumber = require("./util/MakeNumber");
const isValidNum = require("./util/IsValideNum");
const { makeComment, makeCount } = require("./util/MakeCount");

class App {
  play() {
    Console.print(GAME_MESSAGE.START_MESSAGE);
    this.gameStart();
  }

  gameStart() {
    this.answer = makeNumber();
    this.inputAnswer();
  }
  gameEnd() {
    Console.print(GAME_MESSAGE.END_MESSAGE);
    Console.readLine(GAME_MESSAGE.INTENTION_MESSAGE, (input) => {
      if (input === "1") return this.gameStart();
      if (input === "2") return Console.close();
      return throwErr();
    });
  }

  inputAnswer() {
    Console.readLine(GAME_MESSAGE.INPUT_MESSAGE, (input) => {
      this.userInput = Array.from(String(input), Number);
      this.checkInput();
    });
  }
  checkInput() {
    if (!isValidNum(this.userInput)) {
      this.throwErr();
    }
    this.makeOutput();
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

  throwErr() {
    throw new Error(MESSAGE.INPUT_EXCEPTION);
  }
}
const baseball = new App();
baseball.play();
module.exports = App;
