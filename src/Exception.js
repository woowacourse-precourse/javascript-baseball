const { Console } = require("@woowacourse/mission-utils");
const { ERROR, EXCEP } = require("./constants/setting");

function exception(userNum) {
    // 길이가 3자리인지 확인, 3자리 전부 일의 자리 숫자인지 확인 가능.
    if (userNum.length !== EXCEP.THREE_DIGITS) {
        Console.close();
        throw ERROR.WRONG_LENGTH;
    }
    // 서로 다른 수인지 확인
    if (userNum[EXCEP.FIRST] === userNum[EXCEP.SECONED] || userNum[EXCEP.SECONED] === userNum[EXCEP.THIRD] || userNum[EXCEP.FIRST] === userNum[EXCEP.THIRD]) {
        Console.close();
        throw ERROR.DUPLICATION;
    }
    // 숫자가 아닐경우
    if (isNaN(userNum)) {
        Console.close();
        throw ERROR.ISNAN;
    }
    // 0을 넣었을 경우
    if (userNum.includes(EXCEP.ZERO)) {
        Console.close();
        throw ERROR.ONE_TO_NINE;
    }
}

function pickedWrongChoice() {
    Console.close();
    throw ERROR.WRONG_CHOICE;
}

module.exports = {
    exception,
    pickedWrongChoice,
}