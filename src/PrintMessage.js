const MissionUtils = require("@woowacourse/mission-utils");

const GAME_START_MESSAGE = "숫자 야구 게임을 시작합니다.";
const GAME_WIN_MESSAGE = "3개의 숫자를 모두 맞히셨습니다! 게임 종료";

function printGameStart() {
    MissionUtils.Console.print(GAME_START_MESSAGE);
}

function printBallAndStrike(ball, strike){
    const NUM_OF_BALL = `${ball}볼`;
    const NUM_OF_STRIKE = `${strike}스트라이크`;
    const NOTHINGCORRECT = "낫싱";

    if(ball > 0 && strike > 0){
        printBoth(NUM_OF_BALL, NUM_OF_STRIKE);
    }
    else if(ball > 0 && strike === 0){
        printNumOfBall(NUM_OF_BALL);
    }
    else if(strike > 0 && ball === 0){
        printNumOfStrike(NUM_OF_STRIKE);
    }
    else if(ball === 0 && strike === 0){
        printNothing(NOTHINGCORRECT);
    }
}

function printBoth(NUM_OF_BALL, NUM_OF_STRIKE) {
    MissionUtils.Console.print(`${NUM_OF_BALL} ${NUM_OF_STRIKE}`);
}

function printNumOfStrike(NUM_OF_STRIKE) {
    MissionUtils.Console.print(NUM_OF_STRIKE);
}

function printNumOfBall(NUM_OF_BALL) {
    MissionUtils.Console.print(NUM_OF_BALL);
}

function printNothing(NOTHINGCORRECT){
    MissionUtils.Console.print(NOTHINGCORRECT);
}

function printGameWin() {
    MissionUtils.Console.print(GAME_WIN_MESSAGE);
}

module.exports = {
    printGameStart,
    printBallAndStrike,
    printGameWin
}