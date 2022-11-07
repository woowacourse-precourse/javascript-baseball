const { MESSAGE } = require("./constant/message.constant");

class App {
  play() {
    Console.print(MESSAGE.START);
    this.start();
  }
}

module.exports = App;
