const GameController = require("./controller/GameController");

class App {
  #gameController = new GameController();

  play() {
    this.#gameController.startGame();
  }
}
module.exports = App;

const app = new App();
app.play();
