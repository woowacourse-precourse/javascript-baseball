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
    return computerNumber;
  }

  validUserInput(input) {
    if (input.length !== 3) {
      throw new Error("중복되지 않는 1~9까지의 3자리 숫자만 입력해주세요");
    }
    if (new Set(input).size !== 3) {
      throw new Error("중복되지 않는 1~9까지의 3자리 숫자만 입력해주세요");
    }
    if (input.includes("0")) {
      throw new Error("중복되지 않는 1~9까지의 3자리 숫자만 입력해주세요");
    }
    return true;
  }

  userInput() {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (input) => {
      this.validUserInput(input);
    });
  }
  gameStart() {
    this.getComputerNumber();
    this.userInput();
  }
  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.gameStart();
  }
}
const app = new App();
app.play();
module.exports = App;
