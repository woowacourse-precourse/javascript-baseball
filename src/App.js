const BaseballGame = require('./BaseballGame');

class App {
  play() {
    const game = new BaseballGame();
    game.start();
  }
}

module.exports = App;
