const getNewAnswer = require("./getNewAnswer");
const { Console } = require("@woowacourse/mission-utils");
const Message = require("./Message");
const {
  handleGameException,
  handleRestartException,
} = require("./handleException");
const getResult = require("./getResult");
const {
  printStart,
  printCorrect,
  printGameover,
  printResult,
} = require("./printMessage");

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
      handleGameException(userInput);
      this.inGame(userInput);
    });
  }

  inGame(userInput) {
    const result = getResult(this.answer, userInput);
    printResult(result);

    if (checkWrong(result)) this.getUserInput();
    this.correct();
  }

  correct() {
    printCorrect();
    this.getUserRestartInput();
  }

  getUserRestartInput() {
    Console.readLine(`${Message.restart}`, (userRestartInput) => {
      this.decideRestart(userRestartInput);
    });
  }

  decideRestart(userRestartInput) {
    handleRestartException(userRestartInput);

    if (userRestartInput === Message.restartNum) {
      this.answer = getNewAnswer();
      this.getUserInput();
    }

    if (userRestartInput === Message.gameoverNum) {
      printGameover();
      Console.close();
    }
  }
}

function checkWrong(result) {
  return result !== Message.threeStrike;
}

const app = new App();
app.play();

module.exports = App;
