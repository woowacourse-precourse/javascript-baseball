const { Console, Random } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('./data/constants');

class App {
  randomArray() {
    return Random.pickUniqueNumbersInRange(1, 9, 3);
  }
  play() {
    Console.print(MESSAGE.START);
  }
}

module.exports = App;
