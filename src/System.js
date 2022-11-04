const MissionUtils = require("@woowacourse/mission-utils");

class System {
  getStarted() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
  }
}

module.exports = System;
