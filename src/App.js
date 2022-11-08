const { Console, Random } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('./data/constants');

class App {
  randomArray() {
    return Random.pickUniqueNumbersInRange(1, 9, 3);
  }

  recursiveInput() {
    Console.readLine(MESSAGE.INPUT, inputNum => {
      this.restart();
    });
  }

  restart() {
    this.computerNumber = this.randomArray();
    this.recursiveInput();
  }

  play() {
    Console.print(MESSAGE.START);
    this.computerNumber = this.randomArray();
    this.recursiveInput();
  }
}

module.exports = App;
