const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    this.showMessage();
    this.userInput();
  }
  showMessage() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
  }
  userInput() {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (userNumber) => {
      console.log(`사용자 : ${userNumber}`);
    });
  }
  computerRandomNumber() {
    const COMPUTER = [];
    while (COMPUTER.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!COMPUTER.includes(number)) {
        COMPUTER.push(number);
      }
    }
  }
}

const app = new App();
app.play();
module.exports = App;
