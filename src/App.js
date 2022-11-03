const { Random, Console } = require('@woowacourse/mission-utils');

class App {
  constructor() {
    this.offerComputerRandomNumbers();
    this.userInputNumbers;
  }

  offerComputerRandomNumbers = () => {
    this.computerNumbers = Random.pickUniqueNumbersInRange(1, 9, 3);
  };

  play() {}
}

const app = new App();
app.play();

module.exports = App;
