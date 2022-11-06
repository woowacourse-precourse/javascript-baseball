const generateComputerNum = require("./GenerateRandomNumber.js");
const printMessage = require("./PrintMessage.js");

function playBaseballGame() {
    const computerNum = generateComputerNum();
    console.log(computerNum);
    let isGamePlaying = true;
    while(isGamePlaying) {
        let userNum, numOfStrike = 0;
        userNum = printMessage.printUserInput();
        //userNum 예외처리 조건 확인
        numOfStrike = getNumOfStrike(computerNum, userNum);
        if(numOfStrike == 3){
            printMessage.printNumOfStrike(numOfStrike);
            printMessage.printGameWin();
            //게임 재시작 or 종료 메세지 출력
            //사용자 1 or 2 입력
            //1일 경우 true flag 리턴
            //2일 경우 false flag 리턴
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

module.exports = playBaseballGame;