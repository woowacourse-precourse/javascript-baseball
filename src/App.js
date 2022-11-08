const MissionUtils = require("@woowacourse/mission-utils");

class App {
  printGameStart() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
  }

  createComputerNumber() {
    const computerNumber = [];

    while (computerNumber.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computerNumber.includes(number)) {
        computerNumber.push(number);
      }
    }

    return computerNumber.join("");
  }
}

module.exports = App;
