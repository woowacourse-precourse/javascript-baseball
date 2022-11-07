const GameController = require("./GameController");

class App {
  gmaeController = new GameController();

  play() {
    this.gmaeController.gameStart();
  }
}

module.exports = App;
