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
      if (this.user.filter((number) => number.match(/[^1-9]/g)).length) {
        throw Error("1부터 9까지의 숫자만 입력해주세요.");
      }
      if (this.user.length !== 3) {
        throw Error("3글자로 입력해주세요.");
      }
      this.countBalls();
    });
  }
  countBalls() {
    let balls = 0;
    this.user.forEach((value, index) => {
      if (this.computer.includes(+value) && this.computer[index] !== +value) {
        balls += 1;
      }
    });
    console.log(balls);
    return balls;
  }
}
const app = new App();
app.play();

module.exports = App;
