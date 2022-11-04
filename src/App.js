const playGame = require("./Game");

class App {
  play() {
    playGame();
  }
}

module.exports = App;

const app = new App();
app.play();
