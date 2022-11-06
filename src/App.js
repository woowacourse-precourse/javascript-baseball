const MissionUtils = require("@woowacourse/mission-utils");

const { Console } = MissionUtils;

class App {
  play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    return;
  }
}

const app = new App();
app.play();

module.exports = App;
