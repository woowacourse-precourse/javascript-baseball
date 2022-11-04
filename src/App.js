const BaseballGame = require("./BaseballGame");

class App {
  game = new BaseballGame();

  play() {
    this.game.startGame();
  }
}

module.exports = App;
