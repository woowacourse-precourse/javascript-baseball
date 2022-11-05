// @ts-check

const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.computer = [];
  }

  play() {
    this.setRandomNumbers();
  }

  setRandomNumbers() {
    while (this.computer.length < 3) {
      const number = this.getRandomNumber();
      this.pushNumberToComputer(number);
    }
  }

  /**
   *
   * @returns {number}
   */
  getRandomNumber() {
    return MissionUtils.Random.pickNumberInRange(1, 9);
  }

  /**
   *
   * @param {number} number
   */
  pushNumberToComputer(number) {
    if (this.isValidNumber(number)) {
      this.computer.push(number);
    }
  }

  /**
   *
   * @param {number} number
   * @returns {boolean}
   */
  isValidNumber(number) {
    return !this.computer.includes(number);
  }
}

module.exports = App;
