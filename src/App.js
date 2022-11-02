const { EXCEPTION } = require("./constants/index.js");
const { generateRandomNumber } = require("./utils/number.js");

class App {
  constructor() {
    this.randomNumber;
  }

  play() {}

  setRandomNumber() {
    this.randomNumber = generateRandomNumber({
      start: EXCEPTION.MIN_NUMBER,
      end: EXCEPTION.MAX_NUMBER,
      count: EXCEPTION.VALID_NUMBER_LENGTH,
    });
  }
}

module.exports = App;
