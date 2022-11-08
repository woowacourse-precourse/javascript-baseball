const Game = require('./controller/Game');

class App {
  play() {
    this.game = new Game();
    this.game.playGame();
  }
}

module.exports = App;
