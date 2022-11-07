const GameController = require("./GameController");

class App {
  gmaeController = new GameController();

  play() {
    this.gmaeController.gameStart();
  }
}

const app = new App();
app.play();

module.exports = App;
