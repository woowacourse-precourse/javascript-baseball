const BaseballGame = require("./baseballGame.js");
const baseballgame = new BaseballGame();

class App {
  play() {
    baseballgame.play();
  }
}

const app = new App();
app.play();

module.exports = App;
