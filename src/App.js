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
      Console.close();
    });
  }

  checkCorrect(result) {
    return result === Message.strike_3;
  }

  printResult(userInput) {
    const result = getResult(this.answer, userInput);
    console.log(result);
    if (this.checkCorrect(result)) this.gameOver();
    else this.getUserInput();
  }

  gameOver() {
    printGameover();
  }
}

const app = new App();
app.play();

module.exports = App;
