const _ = require("../../function");

class Ball {
  constructor(number) {
    this.number = number;
  }

  getNumber() {
    return this.number;
  }

  compareTo(otherBall) {
    return this.getStrikeOf(otherBall);
  }

  getStrikeOf(otherBall) {
    const RESULT = this.number - otherBall.getNumber();
    const COUNT = _.divideNumberToArray(RESULT).filter(
      (number) => number === 0
    ).length;

    return `${COUNT}스트라이크`;
  }
}

module.exports = Ball;
