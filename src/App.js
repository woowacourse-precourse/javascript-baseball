const Console = require('./Console');
const { MESSAGE } = require('./static/constants');

class App {
  constructor() {
    this.console = new Console();
  }

  play() {
    this.printStartMessage();
  }

  printStartMessage() {
    this.console.print(MESSAGE.startApp);
  }
}

module.exports = App;
