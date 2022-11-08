const playGame = require("./play/PlayGame");
class App {
  play() {
    const gameInit = new playGame();
    gameInit.gameReady();
  }
}

const app = new App();
app.play();

module.exports = App;
