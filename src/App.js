const MissionUtils = require("@woowacourse/mission-utils");
class App {
  play() {
    MissionUtils.Console.print('숫자 야구게임을 시작합니다');
  }
}

const app = new App();
app.play();

module.exports = App;