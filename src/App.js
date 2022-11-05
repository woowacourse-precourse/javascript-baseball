const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {}

  makeRandomNumber() {
    const results = [];
    while (results.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!results.includes(number)) results.push(number);
    }
    return results;
  }
}

module.exports = App;
