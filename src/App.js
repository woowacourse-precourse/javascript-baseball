const MissionUtils = require("@woowacourse/mission-utils");
const InputValidation = require("./inputValidation");
const GenerateRandomNumber = require("./generateRandomNumber");
const ballStrikeCheck = require("./ballStrikeCheck");

class App {
    play() {
        gameStartGiude();
        userInputNumber(GenerateRandomNumber());
    }
}

function gameStartGiude() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
}

function userInputNumber(computerNumber) {
    MissionUtils.Console.readLine('세자리 숫자를 입력해주세요 : ', userNumber => {
        const toArrUserNumber = String(userNumber).split("").map(Number);
        return gameStart(toArrUserNumber, computerNumber);
    });
}

function gameStart(userNumber, computerNumber) {
    InputValidation(userNumber);
    const { ballNumber, strikeNumber } = ballStrikeCheck(userNumber, computerNumber);
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
    userInputNumber(GenerateRandomNumber());
}

function endGame() {
    MissionUtils.Console.print('게임을 완전히 종료합니다');
    MissionUtils.Console.close();
}

function faultNumberInput() {
    throw "잘못된 값을 입력하였습니다.";
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