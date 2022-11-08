const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.computerNumber = [];
    this.userNumber = [];
  }

  play() {}

  startGameMessage() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다");
  }

  getComputerAnswer() {
    this.computerNumber = [];

    while (this.computerNumber.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9) + "";
      if (!this.computerNumber.includes(number)) {
        this.computerNumber.push(number);
      }
    }
  }

  getUserNumber() {
    MissionUtils.Console.readLine("숫자를 입력해주세요: ", (inputNumber) => {
      this.userNumber = this.validNumber(inputNumber);

      this.compareResult();
    });
  }
}

const app = new App();
app.play();

module.exports = App;
