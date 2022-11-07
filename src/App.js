const Computer = require("./component/Computer");
const Play = require("./component/Play");
const User = require("./component/User");
const { MESSAGE } = require("./constant/message.constant");

class App {
  constructor() {
    this.computer = new Computer();
    this.user = new User();
    this.game = new Play();
  }
  play() {
    Console.print(MESSAGE.START);
    this.start();
  }

  start() {
    const computerNum = this.computerNum.makeNumbers();
  }
}

module.exports = App;
