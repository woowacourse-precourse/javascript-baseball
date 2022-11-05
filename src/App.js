const MissionUtils = require('@woowacourse/mission-utils');

class App {
  constructor() {
    this.playFirstTime = true;
  }
  play() {
    if (this.playFirstTime) {
      MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    }
  }
}

module.exports = App;
