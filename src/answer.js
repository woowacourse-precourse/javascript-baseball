const MissionUtils = require("@woowacourse/mission-utils");

exports.inputAnswer = function inputAnswer() {
  let input;

  MissionUtils.Console.readLine("숫자를 입력해주세요", (answer) => {
    input = answer;
    console.log(input);
  });

  return input;
};

exports.isRightAnswer = function isRightAnswer(answer) {
  let answerArr = [...answer].map((item) => Number(item));

  if (answerArr.length != 3) throw "잘못된 입력입니다";
};
