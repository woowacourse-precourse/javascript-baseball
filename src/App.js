const BaseballGame = require("./BaseballGame.js");

class App {
  constructor() {
    this.baseballGame = new BaseballGame();
  }

  play() {
    this.baseballGame.startGame();
  }
}
const app = new App();
app.play();

module.exports = App;
