const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    this.startMessage();
    this.computerExtrackNumber();
    this.userNumber();
  }

  startMessage() {
    return MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
  }

  computerExtrackNumber() {
    const COMPUTER_NUMBER = [];
    for (var int = 0; COMPUTER_NUMBER.length < 3; int++) {
      const computerNumber = MissionUtils.Random.pickNumberInRange(1, 9);
      if (COMPUTER_NUMBER[int - 1] !== computerNumber) {
        COMPUTER_NUMBER.push(computerNumber);
      }
    }
    console.log(COMPUTER_NUMBER);
    return COMPUTER_NUMBER;
  }

  userNumber() {
    MissionUtils.Console.readLine("숫자를 입력해주세요.", (answer) => {
      let userNumber = answer.split("").map((element) => parseInt(element));
      console.log(userNumber);
      MissionUtils.Console.close();
    });
  }
}
const app = new App();
app.play();
module.exports = App;
