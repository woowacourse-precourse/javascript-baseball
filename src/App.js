const MissionUtils = require('@woowacourse/mission-utils');
const { gameSetting, requestNumber } = require('./libs/BaseballFunction');

class App {
  play() {
    const computerNumber = gameSetting();
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    requestNumber(computerNumber);
  }
}

const app = new App();
app.play();

module.exports = App;
