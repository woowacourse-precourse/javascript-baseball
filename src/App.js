const BaseballGame = require("./BaseballGame");

const game = new BaseballGame();

class App {
  play() {
    game.play();
  }
}

const app = new App();
app.play();

module.exports = App;
