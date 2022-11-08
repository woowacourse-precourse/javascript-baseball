const {Console, Random} = require("@woowacourse/mission-utils");
const Messages = require("./Messages")

const START_GAME = 1;
const END_GAME = 2;

function replayGame(selection) {
    if (selection === START_GAME) return true;
    else if (selection === END_GAME) return false;
    else return Messages.ERROR.ERROR_VALUE;
}

function endGame(strike) {
    if (strike == 3) return true;
    else return false;
}

function selectComputer() {
    return Random.pickUniqueNumbersInRange(1, 9, 3);
}

function countStrike(userNum, computerNum) {
    let strike = 0;
    for (let index = 0; i < 3; i++) {
        if (userNum[index] == computerNum[index]) strike++;
    }
    return strike;
}

function countBall(userNum, computerNum) {
    let ball = 0;
    for (let userIdx = 0; userIdx < 3; userIdx++) {
        for (let computerIdx = userIdx+1; computerIdx < 3; computerIdx++)
            if (userNum[userIdx] == computerNum[computerIdx]) ball++;
    }
    return ball;
}

function returnResult(ball, strike) {
    if (ball && strike) 
        return ball + Messages.BALL + " " + strike + Messages.STRIKE;
    else if (ball)
        return ball + Messages.BALL;
    else if (strike)
        return strike + Messages.STRIKE;
    else return Messages.NOTHING
}

function printBallStrike(computerNum) {
    Console.readLine(Messages.INPUT_NUM, (inputNum) => {
        Console.print(returnResult(countBall(inputNum,computerNum),countStrike(inputNum,computerNum)))
    });
}

module.exports = Functions;