const { MissionUtils } = require("@woowacourse/mission-utils");

const WELCOME_MESSAGE = "숫자 야구 게임을 시작합니다.";
const END_MESSAGE = "3개의 숫자를 모두 맞히셨습니다! 게임 종료";

class Output {
  static printToUser(message) {
    MissionUtils.Console.print(message);
  }
}

module.exports = {
  WELCOME_MESSAGE,
  END_MESSAGE,
  Output,
};
