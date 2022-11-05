const MissionUtils = require("@woowacourse/mission-utils");

function printGameStart() {
    const GAME_START_MESSAGE = "숫자 야구 게임을 시작합니다.";
    MissionUtils.Console.print(GAME_START_MESSAGE);
}

function printUserInput() {
    const REQUEST_USER_INPUT_MESSAGE = "숫자를 입력해주세요";
    MissionUtils.Console.readLine(REQUEST_USER_INPUT_MESSAGE, (userInputNum) => {
        console.log(` : ${userInputNum}`);
    });
    return userInputNum;
}

module.exports.printGameStart = printGameStart;
module.exports.printUserInput = printUserInput;