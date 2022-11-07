const Game = require('./components/Game');

class App {
  play() {
    const game = new Game();
    game.start();
  }
}

module.exports = App;
