const MIN_NUMBER = 1;
const MAX_NUMBER = 9;

function inputValidation(number) {
    threeDigitValidation(number);
    numberRangeValidation(number);
    reduplicationValidation(number);
}

function threeDigitValidation(number) {
    if (number.length !== 3) {
        throw "잘못된 값을 입력하였습니다.";
    }
}

function numberRangeValidation(number) {
    const insideRange = number.every(eachDigit => ((eachDigit >= MIN_NUMBER) && (eachDigit <= MAX_NUMBER)));
    if (!insideRange) {
        throw "잘못된 값을 입력하였습니다.";
    }
}

function reduplicationValidation(number) {
    const isReduplication = (new Set(number).size !== 3);
    if (isReduplication) {
        throw "잘못된 값을 입력하였습니다.";
    }
}

module.exports = inputValidation;