const MissionUtils = require("@woowacourse/mission-utils");
class BaseBallGame {
  constructor() {
    this.start();
    this.ANSWER = this.generateAnswer();
  }

  start() {
    const OPENING_MENT = "숫자 야구 게임을 시작합니다.";
    MissionUtils.Console.print(OPENING_MENT);
  }

  generateAnswer() {
    const TEMPORARY_STORAGE = [];
    while(TEMPORARY_STORAGE.length < 3) {
      const TEMPORARY_NUMBER = MissionUtils.Random.pickNumberInRange(1, 9)
      if (!TEMPORARY_STORAGE.includes(TEMPORARY_NUMBER)) TEMPORARY_STORAGE.push(TEMPORARY_NUMBER);
    }
    return TEMPORARY_STORAGE.join('');
  }
}

const game = new BaseBallGame;
game.start();

module.exports = BaseBallGame;
