const MissionUtils = require("@woowacourse/mission-utils");

class App {
  makeComputerArr() {
    this.computer = [];
    while (this.computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.computer.includes(number)) {
        this.computer.push(number);
      }
    }
    return this.computer;
  }

  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    return this.makeComputerArr();
  }
}

const app = new App();
console.log(app.play());
module.exports = App;
