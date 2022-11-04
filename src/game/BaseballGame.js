const { createRandomNumber } = require('../computer/computer');

class BaseballGame {
  constructor() {
    this.randomNumber = createRandomNumber();
  }
}

module.exports = BaseballGame;
