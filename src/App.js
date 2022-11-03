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