const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.computerNumber = [];
    this.userNumber = [];
  }
  play() {
    this.computerNumber = this.initNumber();
    this.showPrint("숫자 야구 게임을 시작합니다.");
    this.compareNumber();
  }
}

const app = new App();
app.play();

module.exports = App;
