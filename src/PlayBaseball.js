const generateComputerNum = require("./GenerateRandomNumber.js");
const printMessage = require("./PrintMessage.js");

function playBaseballGame() {
    const computerNum = generateComputerNum();
    console.log(computerNum);
    let isGamePlaying = true;
    while(isGamePlaying) {
        let userNum, numOfStrike = 0;
        userNum = printMessage.printUserNumInput();
        //userNum 예외처리 조건 확인
        numOfStrike = getNumOfStrike(computerNum, userNum);
        if(numOfStrike == 3){
            printMessage.printNumOfStrike(numOfStrike);
            printMessage.printGameWin();
            let userContinueSelect;
            const PLAY_AGAIN = 1;
            const QUIT_GAME = 2;
            userContinueSelect = printMessage.printUserContinueInput();
            if(userContinueSelect == PLAY_AGAIN){
                return true;
            }
            else if(userContinueSelect == QUIT_GAME){
                return false;
            }
            else{//예외처리전 게임이 종료되도록
                return false;
            }
        }
        else{
            let numOfBall;
            numOfBall = getNumOfBall(computerNum, userNum);
            getCompareResult(numOfBall, numOfStrike);
        }
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

function getCompareResult(numOfBall, numOfStrike) {
    let isBothExist = false;
    if(numOfBall > 0 && numOfStrike > 0) {
        isBothExist = true;
    }
    if(numOfBall > 0) {
        printMessage.printNumOfBall(numOfBall);
    }
    if(isBothExist) {
        printMessage.printSpace();
    }
    if(numOfStrike > 0) {
        printMessage.printNumOfStrike(numOfStrike);
    }
    printMessage.printEndOfLine();
}

module.exports.playBaseballGame = playBaseballGame;