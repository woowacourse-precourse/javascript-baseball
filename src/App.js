const BaseballGame = require('./components/BaseballGame');

class App {
  constructor() {
    this.App = App;
  }

  play() {
    BaseballGame.printStartMessage();
    BaseballGame.startGame();
  }
}

module.exports = App;
