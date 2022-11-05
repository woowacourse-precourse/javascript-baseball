const MissionUtils = require("@woowacourse/mission-utils");
const MIN_NUMBER = 1;
const MAX_NUMBER = 9;
const RETURN_COUNT = 3;

class App {
    play() {
        startGuidePrint();
        const randomNumber = generateRandomNumber();
        userInputNumber(randomNumber);
    }
}
const a = new App();
a.play();

function startGuidePrint() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
}

function generateRandomNumber() {
    return MissionUtils.Random.pickUniqueNumbersInRange(MIN_NUMBER, MAX_NUMBER, RETURN_COUNT);
}


function userInputNumber(randomNumber) {
    MissionUtils.Console.readLine("세자리 숫자를 입력해주세요 : ", number => {
        return gameStart(number, randomNumber)
    });
}

function gameStart(number, randomNumber) {
    const numberSplit = String(number).split("").map(Number);
    inputValidation(numberSplit);
    const [strikeCount, ballCount] = strikeBallCount(numberSplit, randomNumber);
    resultPrint(strikeCount, ballCount);
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
    const isNumberBetween = number.every(eachDigit => eachDigit > 0 && eachDigit < 10);
    if (!isNumberBetween) {
        throw "잘못된 값을 입력하였습니다.";
    }
}

function reduplicationValidation(number) {
    const isReduplication = new Set(number).size === 3;
    if (!isReduplication) {
        throw "잘못된 값을 입력하였습니다.";
    }
}

function strikeBallCount(userNumber, computerNumber) {
    let strikeCount = 0;
    let ballCount = 0;
    userNumber.forEach((eachDigit, index) => {
        if (eachDigit === computerNumber[index]) {
            strikeCount++;
        } else if (computerNumber.includes(eachDigit)) {
            ballCount++;
        }
    })
    return [strikeCount, ballCount];
}

function resultPrint(strikeCount, ballCount) {
    if (strikeCount > 0 && ballCount > 0) {
        MissionUtils.Console.print(`${ballCount}볼 ${strikeCount}스트라이크`);
    } else if (strikeCount > 0 && ballCount === 0) {
        MissionUtils.Console.print(`${strikeCount}스트라이크`);
    } else if (strikeCount === 0 && ballCount > 0) {
        MissionUtils.Console.print(`${ballCount}볼`);
    } else {
        MissionUtils.Console.print(`낫싱`);
    }
}

module.exports = App;