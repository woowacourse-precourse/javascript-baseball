const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.init();
  }
  init() {
    this.computer = [];
    this.user = [];
    this.result = "";
    this.isCorrect = false;
    this.getComputerNumber();
  }
  getComputerNumber() {
    while (this.computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);

      if (!this.computer.includes(number)) {
        this.computer.push(number);
      }
    }
    MissionUtils.Console.print(this.computer);
  }
}
const app = new App();
app.play();

module.exports = App;
