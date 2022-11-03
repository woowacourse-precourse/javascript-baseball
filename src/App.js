const generateComputerNum = require("./GenerateRandomNumber.js");

class App {
  play() {
    const computerNum = generateComputerNum();
    console.log(computerNum);
  }
}

module.exports = App;
