const BaseballGame = require("./BaseballGame");

class App {
  play() {
    const baseballGame = new BaseballGame();
    baseballGame.initGame();
  }
}

module.exports = App;
