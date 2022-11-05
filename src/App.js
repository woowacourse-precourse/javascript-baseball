const printMessage = require("./PrintMessage.js");
const playGame = require("./PlayBaseball/js");

class App {
  play() {
    printMessage.printGameStart();
    playGame.playBaseballGame();
  }
}

module.exports = App;
