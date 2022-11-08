const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    this.startMessage();
    this.computerExtrackNumber();
  }

  startMessage() {
    return MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
  }

  computerExtrackNumber() {
    const COMPUTER_NUMBER = [];
    for (var int = 0; COMPUTER_NUMBER.length < 3; int++) {
      const computerNumber = MissionUtils.Random.pickNumberInRange(1, 9);
      MissionUtils.Console.close();
      if (COMPUTER_NUMBER[int - 1] !== computerNumber) {
        COMPUTER_NUMBER.push(computerNumber);
      }
    }
    return COMPUTER_NUMBER;
  }
}
const app = new App();
app.play();
module.exports = App;
