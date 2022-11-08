const { Console } = require("@woowacourse/mission-utils");

const { MESSAGE } = require("./constant");
const generateComputerAnswer = require("./generateComputerAnswer");
const playSubroutine = require("./playSubroutine");

class App {
  play() {
    Console.print(MESSAGE.start);

    const computerAnswer = generateComputerAnswer();
    playSubroutine(computerAnswer);
  }
}

const app = new App();
app.play();

module.exports = App;
