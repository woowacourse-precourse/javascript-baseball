const MissionUtils = require('@woowacourse/mission-utils');

const GAME_START_MSG = '숫자 야구 게임을 시작합니다.';

class App {
  play() {
    MissionUtils.Console.print(GAME_START_MSG);
  }

  generateAnswer() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
  }

  constructor() {
    this.answer = this.generateAnswer();
  }
}

module.exports = App;
