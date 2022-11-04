const MissionUtils = require('@woowacourse/mission-utils');
const main = require('./main');

class App {
  play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    main();
  }
}

const app = new App();
app.play();

module.exports = App;
