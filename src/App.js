const getNewAnswer = require("./getNewAnswer");
const { Console } = require("@woowacourse/mission-utils");
const Message = require("./Message");
const checkException = require("./checkException");

class App {
  constructor() {
    this.answer = getNewAnswer();
  }

  play() {
    this.getUserInput();
  }

  getUserInput() {
    Console.readLine(`${Message.input}`, (userInput) => {
      checkException(userInput);
      Console.close();
    });
  }
}

const app = new App();
app.play();

module.exports = App;
