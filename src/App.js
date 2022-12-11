const GameController = require("./controller/GameController");

class App {
  constructor() {
    this.game = new GameController();
  }

  play() {
    this.game.onInputNumbers();
  }
}

const app = new App();
app.play();

module.exports = App;
