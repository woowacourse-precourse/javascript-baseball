const MissionUtils = require("@woowacourse/mission-utils");

class App {

  play() {
    this.gamaStartAlram()
  }

  gamaStartAlram() {
    MissionUtils.Console.print("게임을 시작합니다")
  }

}

const app = new App();
app.play();
module.exports = App;
