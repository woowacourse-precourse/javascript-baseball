

class App {
  play() {
    const computerNum = [];
    const generateComputerNum = require("./GenerateRandomNumber.js");
    generateComputerNum(computerNum);
  }
}

module.exports = App;
