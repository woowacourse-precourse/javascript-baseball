const GameManager = require("./GameManager");

class App {
  constructor() {
    this.gameManager = new GameManager();
  }

  play() {
    this.gameManager.startGame();
  }
}

new App().play();

module.exports = App;
