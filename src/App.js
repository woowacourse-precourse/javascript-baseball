const BaseballGame = require('./game/BaseballGame');

class App {
  constructor() {
    this.baseballGame = new BaseballGame();
  }

  play() {
    this.baseballGame.init();
  }
}

module.exports = App;
