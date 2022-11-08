const MissionUtils = require("@woowacourse/mission-utils");
const validation = require('./validation');

// 사용자 입력
const userInputNumber = () => {
    let userAnswer = "";
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (input) => {
      validation(input);
      userAnswer = input;
    });

    return userAnswer;
}

module.exports = userInputNumber