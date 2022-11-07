const printMessage = require("./PrintMessage.js");
const NumGenerator = require("./GenerateRandomNumber");
const playGame = require("./PlayBaseball.js");

class App {
  constructor() {
    this.computerNum;
    this.isPlayGame = true;
  }
  play() {
  }
  GenerateComputerNum() {
    this.computerNum = NumGenerator.generateComputerNum();
  }
}

module.exports = App;
