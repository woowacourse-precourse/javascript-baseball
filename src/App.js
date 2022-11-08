const getNewAnswer = require("./getNewAnswer");
const { Console } = require("@woowacourse/mission-utils");
const Message = require("./Message");
const handleException = require("./handleException");
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
      handleException(userInput);
      this.printResult(userInput);
    });
  }

  checkCorrect(result) {
    return result === Message.strike_3;
  }

  printResult(userInput) {
    const result = getResult(this.answer, userInput);
    Console.print(result);
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
    if (
      userRestartInput !== Message.restartNum &&
      userRestartInput !== Message.gameoverNum
    ) {
      throw new Error(Message.error);
    }

    if (userRestartInput === Message.restartNum) {
      this.answer = getNewAnswer();
      this.getUserInput();
    }

    if (userRestartInput === Message.gameoverNum) {
      Console.print(Message.gameover);
      Console.close();
    }
  }
}

const app = new App();
app.play();

module.exports = App;
