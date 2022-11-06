const generateComputerNum = require("./GenerateRandomNumber.js");
const printMessage = require("./PrintMessage.js");

function playBaseballGame() {
    const computerNum = generateComputerNum();
    console.log(computerNum);
    let isGamePlaying = true;
    while(isGamePlaying) {
        let userNum, numOfStrike = 0;
        userNum = printMessage.printUserInput();
        numOfStrike = getNumOfStrike(computerNum, userNum);
    }
}

function getNumOfStrike(computerNum, userNum){
    let numOfStrike = 0;
    for(let iter = 0; iter < computerNum.length; iter++) {
        if(computerNum[iter] == userNum[iter]) {
            numOfStrike++;
        }
    }
    return numOfStrike;
}

function getNumOfBall(computerNum, userNum) {
    let numOfBall = 0;
    for(let iter = 0; iter < computerNum.length; iter++) {
        numOfBall += isBall(iter, computerNum, userNum);
    }
    return numOfBall;
}

function isBall(compareIter, computerNum, userNum) {
    for(let iter = 0; iter < computerNum.length; iter++) {
        if((compareIter != iter) && (computerNum[compareIter] == userNum[iter])) {
            return 1;
        }
    }
    return 0;
}

module.exports = playBaseballGame;