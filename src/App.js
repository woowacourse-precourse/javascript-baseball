const { Console } = require("@woowacourse/mission-utils");
const MESSAGE = require("./assets/Message");
const Computer = require("./components/Computer");

class App {
  constructor() {
    this.computer = new Computer();
    this.answer = null;
  }

  play() {
    Console.print(MESSAGE.START);
    this.start();
  }

  start() {
    this.answer = this.computer.makeAnswer();
    this.enter();
  }

  enter() {
    Console.readLine(MESSAGE.ENTER, (input) => Console.print(input));
  }
}

module.exports = App;
