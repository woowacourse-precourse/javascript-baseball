const MissionUtils = require('@woowacourse/mission-utils');

class App {
  constructor(numberSize = 3) {
    this.numberSize = numberSize;
  }

  play() {
    const computer = this.makeRandomNumber();
    MissionUtils.Console.close();
  }

  makeRandomNumber() {
    const computer = [];
    while (computer.length < this.numberSize) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
  }

  compareNumbers(computer, user) {}

  printCompareResult(result) {}
}

const app = new App();
app.play();

module.exports = App;
