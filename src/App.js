const printMessage = require("./PrintMessage.js");
const playGame = require("./PlayBaseball/js");

class App {
  play() {
    let playGame = true;
    printMessage.printGameStart();
    while(playGame){
      playGame = playGame.playBaseballGame();
    }
  }
}

module.exports = App;
