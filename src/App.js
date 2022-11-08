const MissionUtils = require("@woowacourse/mission-utils");
class BaseBallGame {
  constructor() {
    this.start();
  }

  start() {
    const OPENING_MENT = "숫자 야구 게임을 시작합니다.";
    MissionUtils.Console.print(OPENING_MENT);
  }
}

const game = new BaseBallGame;
game.start();

module.exports = BaseBallGame;
