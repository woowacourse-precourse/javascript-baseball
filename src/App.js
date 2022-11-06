class App {
  constructor() {
    this.playGame = require("./play/PlayGame");
  }
  play() {
    const gameInit = new this.playGame();
    return gameInit.gameStart();
  }
}

const app = new App();
app.play();

module.exports = App;
