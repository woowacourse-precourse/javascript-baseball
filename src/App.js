const BaseballGame = require("./game-utils/BaseballGame");

class App {
  constructor() {
    this.baseballGame = new BaseballGame();
  }

  play() {
    this.baseballGame.start();
  }
}

module.exports = App;