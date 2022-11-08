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

function findInputNumExcept(inputNum) {
    let inputString = inputNum.toString();
    if (inputString.indexOf(0) != -1) return Messages.ERROR.ERROR_RANGE;
    if (inputString.length != 3) return Messages.ERROR.ERROR_NUMBER_COUNT;
    if (Set(inputString).length != 3) return Messages.ERROR.ERROR_OVERLAP;
    return false;
}

function printBallStrike(computerNum) {
    let strike = 0;
    let ball = 0;
    Console.readLine(Messages.INPUT_NUM, (inputNum) => {
        const error = findInputNumExcept(inputNum);
        if (error) {
            throw new Error(error);
        }
        strike = countStrike(inputNum,computerNum);
        ball = countBall(inputNum,computerNum);
        Console.print(returnResult(ball,strike));
    });
    Console.close();
    return strike;
}

function selectRestart() {
    Console.readLine(Messages.RESTART_OR_CLOSE, (inputCommand) => {
        const playCommand = replayGame(inputCommand);
        if (inputCommand != START_GAME || inputCommand != END_GAME) {
            throw new Error(Messages.ERROR.ERROR_VALUE);
        }
        Console.close();
        return playCommand;
    });
}

function playGame() {
    let playing = true;
    Console.print(Messages.START);

    while (playing) {
        let computerNum = selectComputer();
        let playRound = true;
        while (playRound) {
            let countStrike = printBallStrike(computerNum);
            playRound = endGame(countStrike);
        }
        Console.print(Messages.SUCCESS);
        playing = selectRestart();
    }
}

module.exports = Functions;
