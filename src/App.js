const BaseballGame = require("./game-utils/BaseballGame");

class App {
  constructor() {
    this.baseballGame = new BaseballGame();
  }

  play() {
    this.baseballGame.play();
  }
}

module.exports = App;

const app = new App();
app.play();

