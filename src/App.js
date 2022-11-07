const MissionUtils = require("@woowacourse/mission-utils");
const {
  isInvalidLength,
  isDuplicated,
  isNaN,
  includeSpace,
} = require("../src/inputValidation");

class App {
  play() {}

  gameStart() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
  }

  generateRandomNumber() {
    const randomNumbers = new Set();

    while (randomNumbers.size < 3) {
      const pickedNumber = MissionUtils.Random.pickNumberInRange(1, 9);
      randomNumbers.add(pickedNumber.toString());
    }

    return Array.from(randomNumbers).join("");
  }

  getUserInput() {
    MissionUtils.Console.readLine(
      "1부터 9까지 서로 다른 수로 이루어진 3자리의 수를 입력해주세요. : ",
      (input) => {}
    );
  }
}

module.exports = App;
