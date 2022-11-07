const MissionUtils = require("@woowacourse/mission-utils");

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
}

module.exports = App;
