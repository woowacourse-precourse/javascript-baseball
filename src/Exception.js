const MissionUtils = require("@woowacourse/mission-utils");

function exception(usersNumber) {
    // 길이가 3자리인지 확인, 3자리 전부 일의 자리 숫자인지 확인 가능.
    if (usersNumber.length !== 3) {
        MissionUtils.Console.close();
        throw "잘못 입력하셨습니다.";
    }
    // 서로 다른 수인지 확인
    if (usersNumber[0] === usersNumber[1] || usersNumber[1] === usersNumber[2] || usersNumber[0] === usersNumber[2]) {
        MissionUtils.Console.close();
        throw "중복되지 않는 숫자를 입력해주세요.";
    }
    // 숫자가 아닐경우
    if (isNaN(usersNumber)) {
        MissionUtils.Console.close();
        throw "숫자를 입력해주세요."
    }
    // 0을 넣었을 경우
    if (usersNumber.includes("0")) {
        MissionUtils.Console.close();
        throw "1 ~ 9 사이의 값을 입력해주세요."
    }
}

module.exports = exception;