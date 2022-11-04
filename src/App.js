const { createRandomNumber } = require('./computer/computer');

class App {
  constructor() {
    this.randomNumber = createRandomNumber();
  }

  play() {}
}

module.exports = App;
