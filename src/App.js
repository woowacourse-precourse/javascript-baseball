const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {}

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
}

module.exports = App;
