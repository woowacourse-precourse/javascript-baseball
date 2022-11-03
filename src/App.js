

class App {
  play() {
    const generateComputerNum = require("./GenerateRandomNumber.js");
    const computerNum = generateComputerNum();
    generateComputerNum(computerNum);
    for(let i = 0; i < 3; i++){
      console.log(computerNum[i]);
    }
  }
}

module.exports = App;
