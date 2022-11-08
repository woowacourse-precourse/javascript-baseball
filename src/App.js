const MissionUtils = require("@woowacourse/mission-utils");
class App {
  constructor() {}

  getComputerNumber() {
    const computerNumber = [];
    while (computerNumber.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computerNumber.includes(number)) {
        computerNumber.push(number);
      }
    }
    MissionUtils.Console.print(computerNumber);
    return computerNumber;
  }
  gameStart() {
    this.getComputerNumber();
  }
  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.gameStart();
  }
}
const app = new App();
app.play();
module.exports = App;
