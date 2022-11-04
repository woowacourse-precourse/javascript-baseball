const MissionUtils = require("@woowacourse/mission-utils");
const getUserExecption = require("./getUserExecption");

const getUserInput = () => {
  MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (input) => {
    getUserExecption(input);
  });
};
module.exports = getUserInput;
