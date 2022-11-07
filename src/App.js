const { MissionUtils, Console } = require('@woowacourse/mission-utils');

class App {
  play() {
    this.print('숫자 야구 게임을 시작합니다.');
    this.close();
  }

  print(msg) {
    Console.print(msg);
  }

  close() {
    Console.close();
  }
}

const app = new App();
app.play();

module.exports = App;
