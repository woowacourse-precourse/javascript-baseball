const Game = require("./Game");

class App {
  constructor() {
    this.game = new Game();
  }

  play() {
    this.game.play();
  }
}

const app = new App();
app.play();

module.exports = App;
