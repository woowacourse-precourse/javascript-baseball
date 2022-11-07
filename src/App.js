const getNewAnswer = require("./getNewAnswer");
const { Console } = require("@woowacourse/mission-utils");
const Message = require("./Message");

class App {
  play() {
    const answer = getNewAnswer();
    const userInput = Console.readLine(`${Message.input}`, (value) =>
      console.log(value)
    );
  }
}

const app = new App();
app.play();

module.exports = App;
