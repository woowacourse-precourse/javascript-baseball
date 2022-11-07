const { startGame } = require("./modules/startGame");
const { playGame } = require("./modules/playGame");

class App {
  play() {
    startGame();
    playGame();
  }
}

module.exports = App;
