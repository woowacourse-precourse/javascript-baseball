const MissionUtils = require("@woowacourse/mission-utils");
const Console = MissionUtils.Console;
const validator = require("./Validate");
let randomArr = [0, 0, 0];

class App {
  play() {
    Console.print("숫자 야구 게임을 시작합니다");
    randomArr = this.getRandomNumber();
    this.runGame();
  }

  runGame() {
    Console.readLine("숫자를 입력해주세요: ", (inputStr) => {
      const inputArr = this.validateInput(inputStr);
    });
  }

  getRandomNumber() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
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
    return inputArr;
  }

  checkCount(inputArr) {
    let count = [0, 0];
    for (let i = 0; i < 3; i++) {
      this.checkOne(inputArr, i, count);
    }
  }

  checkOne(inputArr, i, count) {
    if (randomArr[i] === inputArr[i]) {
      count[1]++;
    } else if (randomArr.includes(inputArr[i])) {
      count[0]++;
    }
  }
}

const numberBaseball = new App();

numberBaseball.play();

module.exports = App;
