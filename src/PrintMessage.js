const MissionUtils = require("@woowacourse/mission-utils");

function printGameStart() {
    const GAME_START_MESSAGE = "숫자 야구 게임을 시작합니다.\n";
    MissionUtils.Console.print(GAME_START_MESSAGE);
}

function printUserInput() {
    const REQUEST_USER_INPUT_MESSAGE = "숫자를 입력해주세요";
    MissionUtils.Console.readLine(REQUEST_USER_INPUT_MESSAGE, (userInputNum) => {
        console.log(` : ${userInputNum}`);
    });
    return userInputNum;
}

function printNumOfStrike(numOfStrike){
    if(numOfStrike > 0) {
        const NUM_OF_STRIKE_MESSAGE = `${numOfStrike}스트라이크`;
        MissionUtils.Console.print(NUM_OF_STRIKE_MESSAGE);
    }
}

function printNumOfBall(numOfBall) {
    if(numOfBall > 0) {
        const NUM_OF_BALL_MESSAGE = `${numOfBall}볼`;
        MissionUtils.Console.print(NUM_OF_BALL_MESSAGE);
    }
}

function printSpace() {
    MissionUtils.Console.print(" ");
}

function printEndOfLine() {
    MissionUtils.Console.print("\n");
}

function printGameWin() {
    const GAME_WIN_MESSAGE = "3개의 숫자를 모두 맞히셨습니다! 게임 종료\n";
    MissionUtils.Console.print(GAME_WIN_MESSAGE);
}

module.exports = {
    printGameStart,
    printUserInput,
    printNumOfStrike,
    printNumOfBall,
    printSpace,
    printEndOfLine,
    printGameWin
}