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
  isValidNumber(num, digits) {
    if (isNaN(num)) return false;

    const numList = num.split("");
    if (!this.isEqual(numList.length, digits)) return false;

    const numSet = numList.reduce((numSet, num) => {
      return numSet.add(num);
    }, new Set());
    if (numSet.has("0")) return false;
    if (!this.isEqual(numSet.size, digits)) return false;

    return true;
  }
}
const app = new App();
app.play();

module.exports = App;
