const MissionUtils = require("@woowacourse/mission-utils");
const readLine = MissionUtils.Console.readLine;
const print = MissionUtils.Console.print;
const closeConsole = MissionUtils.Console.close;
class App {
  makeRandomNumber() {
    let arr = new Set();
    while (arr.size < 3) {
      arr.add(MissionUtils.Random.pickNumberInRange(1, 9));
    }
    return Array.from(arr);
  }

  makeUserInputNumber() {
    let userInputNumbers;
    readLine("숫자를 입력해주세요 : ", (inputNumber) => {
      userInputNumbers = [...inputNumber].map(Number);
      return userInputNumbers;
    });
  }

  play() {
    print("숫자 야구 게임을 시작합니다.");
    let randomNumbers = this.makeRandomNumber();
    let userInputNumbers = this.makeUserInputNumber();
  }
}
const app = new App();
app.play();
module.exports = App;
