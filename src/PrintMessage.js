const MissionUtils = require("@woowacourse/mission-utils");

function printGameStart() {
    const GAME_START_MESSAGE = "숫자 야구 게임을 시작합니다.\n";
    MissionUtils.Console.print(GAME_START_MESSAGE);
}

function printBoth(numOfBall, numOfStrike) {
    const NUM_OF_BALL = `${numOfBall}볼`;
    const NUM_OF_STRIKE = `${numOfStrike}스트라이크`;
    MissionUtils.Console.print(`${NUM_OF_BALL} ${NUM_OF_STRIKE}`);
}

function printNumOfStrike(numOfStrike) {
    if(numOfStrike > 0) {
        const NUM_OF_STRIKE_MESSAGE = `${numOfStrike}스트라이크`;
        MissionUtils.Console.print(NUM_OF_STRIKE_MESSAGE);
    }
}

const printUserContinueInput = () => {
    const GAME_CONTINUE_MESSAGE = "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n";
    MissionUtils.Console.readLine(GAME_CONTINUE_MESSAGE, userInput => {
    });
}

function printNumOfBall(numOfBall) {
    if(numOfBall > 0) {
        const NUM_OF_BALL_MESSAGE = `${numOfBall}볼`;
        MissionUtils.Console.print(NUM_OF_BALL_MESSAGE);
    }
}

function printNothing(){
    const NOTHINGCORRECT = "낫싱";
    MissionUtils.Console.print(NOTHINGCORRECT);
}

function printSpace() {
    MissionUtils.Console.print(" ");
}

function printGameWin() {
    const GAME_WIN_MESSAGE = "3개의 숫자를 모두 맞히셨습니다! 게임 종료\n";
    MissionUtils.Console.print(GAME_WIN_MESSAGE);
}

module.exports = {
    printGameStart,
    printUserNumInput,
    printBoth,
    printNumOfStrike,
    printUserContinueInput,
    printNumOfBall,
    printNothing,
    printSpace,
    printGameWin
}