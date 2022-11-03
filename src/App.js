const BaseballGame = require('./BaseballGame');
const Console = require('./Console');
const { MESSAGE } = require('./static/constants');

class App {
  constructor() {
    this.console = new Console();
    this.baseballGame = new BaseballGame(this.console);
  }

  play() {
    this.printStartMessage();
    this.baseballGame.start();
  }

  printStartMessage() {
    this.console.print(MESSAGE.startApp);
  }
}

module.exports = App;
