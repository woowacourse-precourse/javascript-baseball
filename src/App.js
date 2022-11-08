const { Console } = require("@woowacourse/mission-utils");
const { GAME_MESSAGE, RESTART, END } = require("./util/Constant");
const makeNumber = require("./util/MakeNumber");
const isValidNum = require("./util/IsValidNum");
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
      this.askRestart(input);
    });
  }
  askRestart(input) {
    if (input === RESTART) return this.gameStart();
    if (input === END) return Console.close();
    return throwErr();
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
    Console.print(GAME_MESSAGE.ERROR_MESSAGE);
    throw new Error();
  }
}
const baseball = new App();
baseball.play();
module.exports = App;
