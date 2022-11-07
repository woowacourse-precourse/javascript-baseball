const MissionUtils = require("@woowacourse/mission-utils");

function exception(userNum) {
    // 길이가 3자리인지 확인, 3자리 전부 일의 자리 숫자인지 확인 가능.
    if (userNum.length !== 3) {
        MissionUtils.Console.close();
        throw "잘못 입력하셨습니다.";
    }
    // 서로 다른 수인지 확인
    if (userNum[0] === userNum[1] || userNum[1] === userNum[2] || userNum[0] === userNum[2]) {
        MissionUtils.Console.close();
        throw "중복되지 않는 숫자를 입력해주세요.";
    }
    // 숫자가 아닐경우
    if (isNaN(userNum)) {
        MissionUtils.Console.close();
        throw "숫자를 입력해주세요."
    }
    // 0을 넣었을 경우
    if (userNum.includes("0")) {
        MissionUtils.Console.close();
        throw "1 ~ 9 사이의 값을 입력해주세요."
    }
}

module.exports = exception;