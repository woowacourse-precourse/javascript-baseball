const GameStart = require("./GameStart.js");
class App {
  constructor() {
    this.gameStart = new GameStart();
  }

  play() {
    this.gameStart.startGame();
  }
}

const app = new App();
app.play();
module.exports = App;
