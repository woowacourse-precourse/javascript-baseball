const Game = require("./Game");

class App {
  constructor() {
    this.game = new Game();
  }

  play() {
    this.game.startGame();
    this.game.getInput();
  }
}

const app = new App();
app.play();

module.exports = App;
