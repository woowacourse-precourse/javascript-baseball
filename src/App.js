const MissionUtils = require("@woowacourse/mission-utils");
const InputValidation = require("./inputValidation");
const MIN_NUMBER = 1;
const MAX_NUMBER = 9;
const RETURN_COUNT = 3;

class App {
    play() {
        gameStartGiude();
        userInputNumber(generateRandomNumber());
    }
    restart() {
        userInputNumber(generateRandomNumber());
    }
}

function gameStartGiude() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
}

function generateRandomNumber() {
    const computer = [];
    while (computer.length < RETURN_COUNT) {
        const number = MissionUtils.Random.pickNumberInRange(MIN_NUMBER, MAX_NUMBER);
        if (!computer.includes(number)) {
            computer.push(number);
        }
    }
    return computer;
}

function userInputNumber(computerNumber) {
    MissionUtils.Console.readLine('세자리 숫자를 입력해주세요 : ', userNumber => {
        const toArrUserNumber = String(userNumber).split("").map(Number);
        return gameStart(toArrUserNumber, computerNumber)
    });
}

function gameStart(userNumber, computerNumber) {
    InputValidation(userNumber);
    const { ballNumber, strikeNumber } = strikeBallNumber(userNumber, computerNumber);
    getHint(ballNumber, strikeNumber);
    hasThreeStrike(strikeNumber, computerNumber);
}

function hasThreeStrike(strikeNumber, computerNumber) {
    notThreeStrike(strikeNumber, computerNumber);
    threeStrike(strikeNumber);
}

function notThreeStrike(strikeNumber, computerNumber) {
    if (strikeNumber !== 3) {
        userInputNumber(computerNumber);
    }
}

function threeStrike(strikeNumber) {
    if (strikeNumber === 3) {
        MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
        MissionUtils.Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n', whetherGameEndsNot);
    }
}

function whetherGameEndsNot(number) {
    if (number === '1') {
        newGame();
    }
    if (number === '2') {
        endGame();
    }
    if (number !== '1' && number !== '2') {
        faultNumberInput();
    }
}

function newGame() {
    const app = new App();
    app.restart();
}

function endGame() {
    MissionUtils.Console.print('게임을 완전히 종료합니다');
    MissionUtils.Console.close();
}

function faultNumberInput() {
    throw "잘못된 값을 입력하였습니다.";

}

function strikeBallNumber(userNumber, computerNumber) {
    const strikeNumber = countStrike(userNumber, computerNumber);
    const ballNumber = countBall(userNumber, computerNumber);
    return { ballNumber, strikeNumber };
}

function countStrike(userNumber, computerNumber) {
    return userNumber.filter((eachDigit, index) => eachDigit === computerNumber[index]).length;
}

function countBall(userNumber, computerNumber) {
    const countIncludedNumber = userNumber.filter(eachDigit => computerNumber.includes(eachDigit)).length;
    return (countIncludedNumber - countStrike(userNumber, computerNumber));
}

function getHint(ballCount, strikeCount) {
    let hint = '';
    if (ballCount) {
        hint += `${ballCount}볼`;
    }
    if (ballCount && strikeCount) {
        hint += " ";
    }
    if (strikeCount) {
        hint += `${strikeCount}스트라이크`;
    }
    hint = hint || "낫싱";
    MissionUtils.Console.print(hint);
}

module.exports = App;