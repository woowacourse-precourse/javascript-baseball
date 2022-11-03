const generateComputerNum = require("./GenerateRandomNumber.js");
const printMessage = require("./PrintMessage.js");

function playBaseballGame(){
    const computerNum = generateComputerNum();
    console.log(computerNum);
}

module.exports = playBaseballGame;