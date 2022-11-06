const printMessage = require("./PrintMessage.js");
const playGame = require("./PlayBaseball.js");

class App {
  play() {
    let isPlayGame = true;
    printMessage.printGameStart();
    while(isPlayGame){
      isPlayGame = playGame.playBaseballGame();
    }
  }
}

module.exports = App;
