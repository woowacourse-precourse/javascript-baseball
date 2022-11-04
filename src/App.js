const BaseballGame = require('./game/BaseballGame');

class App {
  constructor() {
    this.baseballGame = new BaseballGame();
  }

  play() {}
}

module.exports = App;
