const Game = require('./Game');

const game = new Game();

class App {
  play() {
    game.play();
  }
}

module.exports = App;
