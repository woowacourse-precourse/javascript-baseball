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
  computerNumber() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(String(number));
      }
    }
    return computer;
  }
}

module.exports = App;
