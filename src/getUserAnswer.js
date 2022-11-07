const MissionUtils = require("@woowacourse/mission-utils");
const checkVaildData = require("./checkVaildData");

const getUserAnswer = async () => {
  return new Promise((resolve) => {
    MissionUtils.Console.readLine("숫자를 입력해주세요", (userInput) => {
      resolve(userInput);
    });
  });
};

const vaildUserAnswer = async () => {
  let userAnswer = await getUserAnswer();
  userAnswer = checkVaildData(userAnswer);

  return userAnswer;
};

module.exports = vaildUserAnswer;
