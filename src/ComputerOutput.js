const MissionUtils = require("@woowacourse/mission-utils");

class ComputerOutput {
  gameStart() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
  }
}

const computerOutput = new ComputerOutput();
computerOutput.gameStart();

module.exports = ComputerOutput;
