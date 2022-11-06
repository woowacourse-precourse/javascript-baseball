const MissionUtils = require("@woowacourse/mission-utils");
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
const a = new App();
a.play();

function userInputNumber(computerNumber) {
    MissionUtils.Console.readLine('세자리 숫자를 입력해주세요 : ', userNumber => {
        const toArrUserNumber = String(userNumber).split("").map(Number);
        return gameStart(toArrUserNumber, computerNumber)
    });
}

function gameStart(userNumber, computerNumber) {
    inputValidation(userNumber);
    getHint(countBall(userNumber, computerNumber), countStrike(userNumber, computerNumber));
    if (countStrike(userNumber, computerNumber) !== 3) {
        userInputNumber(computerNumber);
    } else {
        MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
        MissionUtils.Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n', selectNewGame);
    }
}

function selectNewGame(number) {
    const num = Number(number);
    if (num === 1) {
        const app = new App();
        app.restart();
    } else if (num === 2) {
        MissionUtils.Console.close();
    } else {
        throw "잘못된 값을 입력하였습니다.";
    }
}

function inputValidation(number) {
    threeDigitValidation(number);
    numberRangeValidation(number);
    reduplicationValidation(number);
}

function threeDigitValidation(number) {
    const numberLength = number.length;
    if (numberLength !== 3) {
        throw "잘못된 값을 입력하였습니다.";
    }
}

function numberRangeValidation(number) {
    const isNumberBetween = number.every(eachDigit => (eachDigit >= MIN_NUMBER && eachDigit <= MAX_NUMBER));
    if (!isNumberBetween) {
        throw "잘못된 값을 입력하였습니다.";
    }
}

function reduplicationValidation(number) {
    const isReduplication = (new Set(number).size === 3);
    if (!isReduplication) {
        throw "잘못된 값을 입력하였습니다.";
    }
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