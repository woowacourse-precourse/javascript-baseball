const MissionUtils = require("@woowacourse/mission-utils");

class App {
    play() {
        startGuidePrint();
        numberInput();
    }
}

const app = new App();
app.play();

function startGuidePrint() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
}

function numberInput() {
    MissionUtils.Console.readLine("세자리 숫자를 입력해주세요 : ", inputValidation);
}

function inputValidation(number) {
    threeDigitValidation(number);
    numberRangeValidation(number);
    reduplicationValidation(number);
    const userNumber = String(number).split("").map(Number);
    const computerNumber = pickRandomNumber();
    strikeBallCount(userNumber, computerNumber);
}

function threeDigitValidation(number) {
    const numberLength = String(number).length;
    if (numberLength !== 3) {
        throw "잘못된 값을 입력하였습니다.";
    }
}

function numberRangeValidation(number) {
    const numberSplit = String(number).split("").map(Number);
    const isNumberBetween = numberSplit.every(eachDigit => eachDigit > 0 && eachDigit < 10);
    if (!isNumberBetween) {
        throw "잘못된 값을 입력하였습니다.";
    }
}

function reduplicationValidation(number) {
    const numberSplit = String(number).split("");
    const isReduplication = new Set(numberSplit).size === 3;
    if (!isReduplication) {
        throw "잘못된 값을 입력하였습니다.";
    }
}

function pickRandomNumber() {
    const randomThreeNumber = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
    return randomThreeNumber.map(Number);
}

function strikeBallCount(userNumber, computerNumber) {
    let strikeCount = 0;
    let ballCount = 0;
    for (let index = 0; index < userNumber.length; index++) {
        if (userNumber[index] === computerNumber[index]) {
            strikeCount++;
        } else if (computerNumber.includes(userNumber[index])) {
            ballCount++;
        }
    }
    if (strikeCount > 0 && ballCount === 0) {
        MissionUtils.Console.print(`${strikeCount}스트라이크`);
    } else if (strikeCount === 0 && ballCount > 0) {
        MissionUtils.Console.print(`${ballCount}볼`);
    } else if (strikeCount > 0 && ballCount > 0) {
        MissionUtils.Console.print(`${ballCount}볼 ${strikeCount}스트라이크`);
    }
}