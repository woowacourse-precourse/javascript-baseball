const MissionUtils = require("@woowacourse/mission-utils");
class App {
  constructor() {
    this.repit = true;
    this.game = true;
  }
  play() {
    if (this.repit) console.log("숫자 야구 게임을 시작합니다.");
    this.repit = false;

    const computer = this.computerNumber();

    while (this.game) {
      this.compare(computer);
    }
  }
}

module.exports = App;
