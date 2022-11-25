const MissionUtils = require("@woowacourse/mission-utils");

const Output = {
  printStartMent() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
  },

  printResult(result) {
    MissionUtils.Console.print(`${result}`);
  },
};

module.exports = Output;
