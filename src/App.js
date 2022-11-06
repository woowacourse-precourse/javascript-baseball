const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.init();
    this.getUserNumber();
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
  getUserNumber() {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (input) => {
      this.user = input.split("");
      console.log(this.user);
    });
  }
}
const app = new App();
app.play();

module.exports = App;
