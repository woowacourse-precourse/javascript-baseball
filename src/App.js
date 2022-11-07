const { CONSOLE_UTIL, RANDOM_UTIL } = require("./Utils");

class App {
  constructor() {
    this.computerValue = [];
  }

  makeRandomValue() {
    while (this.computerValue.length < 3) {
      const RANDOM_NUMBER = RANDOM_UTIL.pickNumberInRange(1, 9);
      if (!this.computerValue.includes(RANDOM_NUMBER)) {
        this.computerValue.push(RANDOM_NUMBER);
      }
    }
  }

  play() {}
}

module.exports = App;
