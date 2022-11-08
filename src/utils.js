const MissionUtils = require("@woowacourse/mission-utils");

// 주어진 입력이 0 없는 3자리 숫자인지 판단하는 함수
function isThreeDigitNumberWithoutZero(input) {
    const REGEX = /[1-9]{3}/;
    return input.length === 3 && REGEX.test(input);
}

// input인 3자리 숫자에 중복이 없는지 판단하는 함수
function hasNoRedundancy(input) {
    return (input.charAt(0) !== input.charAt(1) && input.charAt(1) !== input.charAt(2)
        && input.charAt(2) !== input.charAt(0));
}

// 예외 상황 발생 시 처리하는 함수
function handleException() {
    MissionUtils.Console.close();
    throw new Error("improper input!");
}

module.exports = {
    isThreeDigitNumberWithoutZero, hasNoRedundancy, handleException
}