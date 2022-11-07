const Game = require("./Game");

class App {
  constructor() {
    this.game = new Game();
  }
  play() {
    this.game.playGame();
  }
  
}

module.exports = App;
