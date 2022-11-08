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
  showPrint(messages) {
    MissionUtils.Console.print(messages);
  }

  initNumber() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
  }
}

const app = new App();
app.play();

module.exports = App;
