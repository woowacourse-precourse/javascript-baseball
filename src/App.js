const { Console, Random } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('./data/constants');

class App {
  randomArr() {
    return Random.pickUniqueNumbersInRange(1, 9, 3);
  }

  recursiveInput() {
    Console.readLine(MESSAGE.INPUT, inputNum => {
      this.restart();
    });
  }

  restart() {
    this.computerNum = this.randomArr();
    this.recursiveInput();
  }

  play() {
    Console.print(MESSAGE.START);
    this.computerNum = this.randomArr();
    this.recursiveInput();
  }
}

module.exports = App;
