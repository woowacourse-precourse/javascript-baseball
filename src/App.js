const getNewAnswer = require("./getNewAnswer");
const { Console } = require("@woowacourse/mission-utils");
const Message = require("./Message");
const checkException = require("./checkException");
const getResult = require("./getResult");
const { printStart, printGameover } = require("./printMessage");

class App {
  constructor() {
    this.answer = getNewAnswer();
  }

  play() {
    printStart();
    this.getUserInput();
  }

  getUserInput() {
    Console.readLine(`${Message.input}`, (userInput) => {
      checkException(userInput);
      this.printResult(userInput);
    });
  }

  checkCorrect(result) {
    return result === Message.strike_3;
  }

  printResult(userInput) {
    const result = getResult(this.answer, userInput);
    Console.log(result);
    if (this.checkCorrect(result)) this.gameOver();
    else this.getUserInput();
  }

  gameOver() {
    printGameover();
    this.getUserRestartInput();
  }

  getUserRestartInput() {
    Console.readLine(`${Message.restart}`, (userRestartInput) => {
      this.decideSystemRestart(userRestartInput);
    });
  }

  decideSystemRestart(userRestartInput) {
    if (userRestartInput !== "1" && userRestartInput !== "2") {
      throw new Error(Message.error);
    }

    if (userRestartInput === "1") {
      this.answer = getNewAnswer();
      this.getUserInput();
    }

    if (userRestartInput === "2") {
      Console.print("게임 종료");
      Console.close();
    }
  }
}

const app = new App();
app.play();

module.exports = App;
