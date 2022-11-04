const { createRandomNumber } = require('./computer/computer');
const BaseballGame = require('./game/BaseballGame');

class App {
  constructor() {
    this.randomNumber = createRandomNumber();
    new BaseballGame(randomNumber);
  }

  play() {}
}

module.exports = App;
