const BaseballGame = require("./BaseballGame");

class App {
  constructor() {
    this.game = new BaseballGame();
  }

  play() {
    this.game.startGame();
  }
}

module.exports = App;
