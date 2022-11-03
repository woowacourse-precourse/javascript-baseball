const { startGame, playGame } = require("./utils/index");
class App {
  play() {
    startGame();
    playGame();
  }
}

module.exports = App;
