const Game = require('./Game');

class App {
  play() {
    const game = new Game();
    game.start();
  }
}

module.exports = App;
