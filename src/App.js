const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {}

  makeRandomNumber() {
    const resultNumber = [];
    while (resultNumber.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!resultNumber.includes(number)) {
        resultNumber.push(number);
      }
    }
    return resultNumber;
  }
}

module.exports = App;
