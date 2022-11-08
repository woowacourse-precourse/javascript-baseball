const BaseballGame = require("./baseball/BaseballGame");
class App {
  constructor() {
    this.baseballGame = new BaseballGame();
  }

  play() {
    this.baseballGame.play();
  }
}

module.exports = App;