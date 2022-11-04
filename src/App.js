const MissionUtils = require('@woowacourse/mission-utils');

class App {
  firstPlay = true;

  play() {
    if (this.firstPlay) {
      MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    }
    this.firstPlay = false;
  }
}

try {
  const app = new App();
  app.play();
} catch {
  MissionUtils.Console.close();
}

module.exports = App;
