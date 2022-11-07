const generateComputerNum = require("./GenerateRandomNumber.js");
const printMessage = require("./PrintMessage.js");
const exception = require("./HandleException.js");

function playBaseballGame() {
    const computerNum = generateComputerNum();
    let isGamePlaying = true;
    //while(isGamePlaying) {
        printMessage.printUserNumInput().then(userNum => {
            exception.handleException(userNum);
            let numOfStrike;
            numOfStrike = getNumOfStrike(computerNum, userNum);
            console.log(`num of strike is ${numOfStrike}`);
            console.log(computerNum);
            if(numOfStrike == 3){
                isGamePlaying = gameWin(numOfStrike);
            }
            else{
                let numOfBall;
                numOfBall = getNumOfBall(computerNum, userNum);
                getCompareResult(numOfBall, numOfStrike);
            }
        });
    //}
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

function gameWin(numOfStrike) {
    printMessage.printNumOfStrike(numOfStrike);
    printMessage.printGameWin().then(userInput => {
        const PLAY_AGAIN = 1;
        const QUIT_GAME = 2;
        if(userInput == PLAY_AGAIN) {
            return true;
        }
        else if(userInput == QUIT_GAME) {
            return false;
        }
        else{
            throw new Error();
        }
    });
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

function getCompareResult(numOfBall, numOfStrike) {
    if(numOfBall > 0 && numOfStrike > 0) {
        printMessage.printBoth(numOfBall, numOfStrike);
    }
    else if(numOfBall > 0) {
        printMessage.printNumOfBall(numOfBall);
    }
    else if(numOfStrike > 0) {
        printMessage.printNumOfStrike(numOfStrike);
    }
    else if(numOfBall == 0 && numOfStrike == 0){
        printMessage.printNothing();
    }
}

module.exports.playBaseballGame = playBaseballGame;