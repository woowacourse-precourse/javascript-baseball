const BaseballGame = require("./baseball/BaseballGame");

class App {
  constructor() {
    this.baseballGame = new BaseballGame();
  }

  play() {
    this.baseballGame.playGame();
  }
}

// const app = new App();
// app.play();
module.exports = App;
