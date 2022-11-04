const BaseballGame = require("./BaseballGame");

class App {
  constructor() {
    this.baseballGame = new BaseballGame();
  }

  play() {
    this.baseballGame.playGame();
  }
}

// new App().play();

module.exports = App;
