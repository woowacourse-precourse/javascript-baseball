const BaseballGame = require("./BaseballGame.js");

class App {
  play() {
    BaseballGame.gameStart();
  }
}

const app = new App();
app.play();

module.exports = App;
