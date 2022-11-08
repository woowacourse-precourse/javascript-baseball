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
  let answerSet = new Set(answerArr);

  if (answerArr.length != 3) throw "잘못된 입력입니다";
  if ([...answerSet].length != answerArr.length) throw "중복된 숫자가 있습니다";
  if (answerArr.includes(0)) throw "1-9까지의 숫자만 입력 가능합니다";
};
