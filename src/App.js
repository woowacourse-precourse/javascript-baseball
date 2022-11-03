const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    this.showStartMessage();
    this.makeRandomNumber();
  }

  showStartMessage() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    MissionUtils.Console.close();
  }

  makeRandomNumber() {
    this.COMPUTER = [];

    while (this.COMPUTER.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);

      if (!this.COMPUTER.includes(number)) {
        this.COMPUTER.push(number);
      }
    }
  }
}

const app = new App();
app.play();

module.exports = App;
