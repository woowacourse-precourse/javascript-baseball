const MissionUtils = require("@woowacourse/mission-utils");

exports.inputAnswer = function inputAnswer() {
  let input;

  MissionUtils.Console.readLine("숫자를 입력해주세요", (answer) => {
    input = answer;
    console.log(input);
  });

  return input;
};
