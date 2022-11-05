const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {}
  generateRandomNumber(digits) {
    const START_INCLUSIVE = 1,
      END_INCLUSIVE = 9;
    const randomNumberSet = new Set();

    while (randomNumberSet.size < digits) {
      const num = MissionUtils.Random.pickNumberInRange(
        START_INCLUSIVE,
        END_INCLUSIVE
      );
      randomNumberSet.add(num);
    }

    return [...randomNumberSet];
  }
  print(message) {
    MissionUtils.Console.print(message);
  }
  isEqual(a, b) {
    return a === b;
  }
}
const app = new App();
app.play();

module.exports = App;
