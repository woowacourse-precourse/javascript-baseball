const { Console, Random } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('./data/constants');
const CheckException = require('./utils');

class App {
  randomArr() {
    return Random.pickUniqueNumbersInRange(1, 9, 3);
  }

  recursiveInput() {
    Console.readLine(MESSAGE.INPUT, inputNum => {
      CheckException(inputNum, 3);
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
