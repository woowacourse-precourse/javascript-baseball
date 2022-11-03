const { Random, Console } = require("@woowacourse/mission-utils");
const { NUMBERS, MESSAGES, RESULT } = require('../src/Constructor')
class App {
  generateRandomNums(min, max, length) {
    const randoms = Random.pickUniqueNumbersInRange(min, max, length);
    return Random.shuffle(randoms);
  }
  
  play() {
    const computer =  this.generateRandomNums(NUMBERS.RANDOM_MIN, NUMBERS.RANDOM_MAX, NUMBERS.REQUIRED_LENGHT);
  }
}

module.exports = App;
