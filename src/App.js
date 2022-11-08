const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    // this.computerNumber = "";
    this.computerNumberArr = [];
  }

  gameStartMessage() {
    return MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
  }

  computerChoiceNumber() {
    this.computerNumber = "";
    for (var i = 0; i < 3; i++) {
      const RANDOM_NUMBER = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.computerNumber.includes(RANDOM_NUMBER)) {
        this.computerNumber += `${RANDOM_NUMBER}`;
      }
    }
    this.computerNumberArr = this.computerNumber
      .toString()
      .split("")
      .map((x) => parseInt(x));
  }

  play() {
    this.gameStartMessage();
    this.computerChoiceNumber();
  }
}

const app = new App();
app.play();

module.exports = App;
