const printMessage = require("./PrintMessage.js");
const playGame = require("./PlayBaseball/js");

class App {
  play() {
    printMessage.printGameStart();
  }
}

module.exports = App;
