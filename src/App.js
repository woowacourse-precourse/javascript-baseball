const MissionUtils = require("@woowacourse/mission-utils");
const Console = MissionUtils.Console;
const validator = require("./Validate");

class App {
  play() {
    Console.print("숫자 야구 게임을 시작합니다");
    this.input();
  }

  getRandomNumber() {
    MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
  }

  validateInput(inputStr) {
    if (
      !validator.isLengthOk(inputStr) ||
      !validator.isNumber(inputStr) ||
      !validator.isDifferent(inputStr) ||
      !validator.isRangeStr(inputStr)
    )
      throw Error("입력 형식이 맞지 않습니다.");

    const inputArr = inputStr.split("").map(Number);
  }

  input() {
    Console.readLine("숫자를 입력해주세요: ", this.validateInput);
  }
}

const numberBaseball = new App();

numberBaseball.play();

module.exports = App;
