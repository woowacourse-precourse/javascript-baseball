const MissionUtils = require("@woowacourse/mission-utils");

const numberInput = () => {
  let inputNumber;
  MissionUtils.Console.readLine("숫자를 입력해주세요 :", (input) => {
    inputNumber = input;
  });
  return inputNumber;
}

module.exports = numberInput;
