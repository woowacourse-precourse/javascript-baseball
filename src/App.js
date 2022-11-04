const gameStart = require("./Game");

class App {
  play() {
    gameStart();
  }
}

module.exports = App;

const app = new App();
app.play();
