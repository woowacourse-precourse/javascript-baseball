const { Console } = require("@woowacourse/mission-utils");

const THREE_DIGITS = 3;
const FIRST_PLACE = 0;
const SECONED_PLACE = 1;
const THIRD_PLACE = 2;
const ZERO = "0";

function exception(userNum) {
    // 길이가 3자리인지 확인, 3자리 전부 일의 자리 숫자인지 확인 가능.
    if (userNum.length !== THREE_DIGITS) {
        Console.close();
        throw "ERROR : 숫자의 길이가 올바르지 않습니다.";
    }
    // 서로 다른 수인지 확인
    if (userNum[FIRST_PLACE] === userNum[SECONED_PLACE] || userNum[SECONED_PLACE] === userNum[THIRD_PLACE] || userNum[FIRST_PLACE] === userNum[THIRD_PLACE]) {
        Console.close();
        throw "ERROR : 중복되지 않는 숫자를 입력해주세요.";
    }
    // 숫자가 아닐경우
    if (isNaN(userNum)) {
        Console.close();
        throw "ERROR : 숫자를 입력해주세요."
    }
    // 0을 넣었을 경우
    if (userNum.includes(ZERO)) {
        Console.close();
        throw "ERROR : 1 ~ 9 사이의 값을 입력해주세요.";
    }
}

function pickedWrongChoice() {
    MissionUtils.Console.close();
    throw "ERROR : 잘못된 수를 입력하셨습니다.";
}

module.exports = {
    exception,
    pickedWrongChoice,
}