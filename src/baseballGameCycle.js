const MissionUtils = require("@woowacourse/mission-utils");
const getRestartOption = require("./getRestartOption");
const getResult = require("./getResult");
const checkInputAvailable = require("./checkInputAvailable");

function baseballGameCycle(randomNumbers) {
  MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (input) => {
    const answer = input.split("");

    if (checkInputAvailable(answer)) {
      const result = getResult(randomNumbers, answer);
      MissionUtils.Console.print(result);
      result.length > 10
        ? getRestartOption()
        : baseballGameCycle(randomNumbers);
    }
    if (!checkInputAvailable(answer)) {
      throw new Error("잘못된 값을 입력했습니다.");
    }
  });
}

module.exports = baseballGameCycle;
