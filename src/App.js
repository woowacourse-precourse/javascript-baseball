const Game = require('./Game.js');
class App {
  constructor() {
    this.game = new Game();
  }

  play() {
    this.game.start();
  }

  numberEnteredByUser() {
    return this.game.numberEnteredByUser;
  }
}

module.exports = App;
