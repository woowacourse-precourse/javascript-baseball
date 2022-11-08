const BaseballGame = require("./baseball/BaseballGame");
class App {
  constructor() {
    this.baseballGame = new BaseballGame();
  }

  play() {
    this.baseballGame.initGame();
  }
}

const app = new App();
app.play();

module.exports = App;
