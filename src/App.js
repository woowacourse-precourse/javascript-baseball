const MissionUtils = require('@woowacourse/mission-utils');
const generateNumber = require('./generateNumber');

class App {
  play() {
    this.start();
    this.computerNumArr = generateNumber();
  }

  start() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
  }

  close() {
    MissionUtils.Console.close();
  }
}

const app = new App();
app.play();

module.exports = App;
