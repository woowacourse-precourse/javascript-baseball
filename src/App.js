const { Console, Random } = require('@woowacourse/mission-utils');

class App {
  play() { }

  createComputerNumber() {
    const computerNumber = new Set();

    while (computerNumber.size < 3) {
      computerNumber.add(Random.pickNumberInRange(1, 9));
    }

    return [...computerNumber];
  }
}

module.exports = App;
