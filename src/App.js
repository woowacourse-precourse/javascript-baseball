const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    const computerNumber = this.generateRandomNumber();
    this.inputNumber(computerNumber);
  }

  generateRandomNumber() {
    const computerNumbers = [];
    while (computerNumbers.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computerNumbers.includes(number)) {
        computerNumbers.push(number);
      }
    }
    return computerNumbers.map((number) => String(number)).join("");
  }

  inputNumber(computerNumber) {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (answer) => {
      // TODO
      // 사용자가 입력한 숫자가 올바른 숫자인지 검증한다.
    });
  }
}

module.exports = App;
