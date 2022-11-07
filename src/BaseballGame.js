const MissionUtils = require("@woowacourse/mission-utils");

class BaseballGame {
  constructor() {
    this.replay = false;
    this.computerNumber;
  }
  init() {
    if (!this.replay) {
      MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    }
  }

  play() {}
}
module.exports = BaseballGame;
