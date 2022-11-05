const MissionUtils = require('@woowacourse/mission-utils');

class App {
  constructor() {
    this.message = '숫자 야구 게임을 시작합니다.';
  }

  play() {
    MissionUtils.Console.print(this.message);
  }
}

const app = new App();
app.play();

module.exports = App;
