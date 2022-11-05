const generateComputerNum = require("./GenerateRandomNumber.js");
const printMessage = require("./PrintMessage.js");

function playBaseballGame() {
    const computerNum = generateComputerNum();
    console.log(computerNum);
    let isGamePlaying = true;
    while(isGamePlaying) {
        let userNum;
        userNum = printMessage.printUserInput();
    }
}

function getNumOfStrike(computerNum, userNum){
    let numOfStrike = 0;
    for(let iter = 0; iter < computerNum.length; iter++){
        if(computerNum[iter] == userNum[iter]){
            numOfStrike++;
        }
    }
    return numOfStrike;
}

module.exports = playBaseballGame;