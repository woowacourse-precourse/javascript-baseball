const { Random, Console } = require("@woowacourse/mission-utils");
class App {
  generateRandomNums() {
    const randoms = Random.pickUniqueNumbersInRange(1, 9, 3);
    return Random.shuffle(randoms);
  }
  
  play() {
  }
}

module.exports = App;
