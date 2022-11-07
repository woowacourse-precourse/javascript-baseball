const MissionUtils = require("@woowacourse/mission-utils");
class App {
  constructor() {
    this.computerNumber = [];
    this.userNumber = [];
  }

  createRandomNumber() {
    while (this.computerNumber.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.computerNumber.includes(number)) {
        this.computerNumber.push(number);
      }
    }
  }

  userInput() {
    MissionUtils.Console.readLine("숫자를 입력해주세요 :", (value) => {
      this.userNumber = [...value];
      try {
        this.checkValidate(this.userNumber);
      } catch (e) {
        MissionUtils.Console.print(e);
        MissionUtils.Console.close();
        MissionUtils.Console.print("게임을 종료합니다.");
      }
    });
  }

  checkValidate(value) {
    if (value.length !== 3) throw "잘못된 입력값 입니다.";
    if (value.includes("0")) throw "잘못된 입력값 입니다.";
    if (isNaN(value)) throw "잘못된 입력값 입니다.";

    const isDuplicated = value.some((elem) => {
      return value.indexOf(elem) !== value.lastIndexOf(elem);
    });
    if (isDuplicated) throw "잘못된 입력값 입니다.";
  }

  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.createRandomNumber();
    this.userInput();
  }
}

module.exports = App;
const app = new App();
app.play();
