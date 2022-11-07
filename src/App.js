const MissonUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.computerRandomNumbers = [];
  }
  play() {
    this.createOpponentRandomNumber();
  }

  createOpponentRandomNumber() {
    const computer = new Set();
    while (computer.size < 3) {
      const randomNumber = MissonUtils.Random.pickNumberInRange(1, 9);
      computer.add(randomNumber);
    }
  
    this.computerRandomNumbers = [...computer];
  }
}

module.exports = App;

const app = new App();
app.play();
