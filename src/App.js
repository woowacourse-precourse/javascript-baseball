const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    this.startMessage();
    const COMPUTER = this.computerExtrackNumber();
    this.userNumber(COMPUTER);
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

  userNumber(computer) {
    MissionUtils.Console.readLine("숫자를 입력해주세요.", (answer) => {
      let userNumber = answer.split("").map((element) => parseInt(element));
      console.log(userNumber);
      this.checkUserNumber(userNumber);
      this.processNumber(computer, userNumber);
      MissionUtils.Console.close();
    });
  }
  checkUserNumber(array) {
    if (array.length != 3) {
      throw "잘못된 값을 입력하셨습니다. 게임을 종료합니다.";
    }
  }
  processNumber(computer, user) {
    let ballCount = 0;
    let strikeCount = 0;
    computer.forEach((number, int) => {
      if (number === user[int]) {
        strikeCount += 1;
      } else if (user.includes(number)) {
        ballCount += 1;
      }
    });
    console.log("볼 => " + ballCount, "스트라이크 => " + strikeCount);
  }
}
const app = new App();
app.play();
module.exports = App;
