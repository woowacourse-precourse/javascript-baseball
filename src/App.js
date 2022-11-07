const getNewAnswer = require("./getNewAnswer");
const { Console } = require("@woowacourse/mission-utils");
const Message = require("./Message");
const checkException = require("./checkException");

class App {
  play() {
    Console.print(`${Message.start}`);
    const answer = getNewAnswer();
    this.getUserInput();
  }

  getUserInput() {
    Console.readLine(`${Message.input}`, (value) => {
      checkException(value);
      Console.close();
    });
  }
}

const app = new App();
app.play();

module.exports = App;
