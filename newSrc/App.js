const GameController = require('./GameController');
const Baseball = require('./Baseball');

class App {
  gameController;

  constructor(gameController) {
    this.gameController = gameController;
  }

  play() {
    this.gameController.gameStart();
  }
}

const app = new App(new GameController(new Baseball()));
app.play();
