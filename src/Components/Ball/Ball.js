const _ = require("../../function");

class Ball {
  constructor(number) {
    this.number = number;
  }

  getNumber() {
    return this.number;
  }

  compareTo(otherBall) {
    const BALL = this.getBallOf(otherBall);
    const STRIKE = this.getStrikeOf(otherBall);

    if (!BALL && !STRIKE) return "낫싱";

    return `${this.getBallOf(otherBall)} ${this.getStrikeOf(otherBall)}`.trim();
  }

  getStrikeOf(otherBall) {
    const BALL_NUMBER_ARRAY = _.divideNumberToArray(this.number);
    const OTHER_BALL_NUMBER_ARRAY = _.divideNumberToArray(
      otherBall.getNumber()
    );
    const COUNT = BALL_NUMBER_ARRAY.filter(
      (number, index) => number === OTHER_BALL_NUMBER_ARRAY[index]
    ).length;

    return COUNT ? `${COUNT}스트라이크` : "";
  }

  getBallOf(otherBall) {
    const BALL_NUMBER_ARRAY = _.divideNumberToArray(this.number);
    const OTHER_BALL_NUMBER_ARRAY = _.divideNumberToArray(
      otherBall.getNumber()
    );
    const COUNT = BALL_NUMBER_ARRAY.filter((number, index) => {
      const SAME_NUMBER_INDEX = OTHER_BALL_NUMBER_ARRAY.indexOf(number);

      return SAME_NUMBER_INDEX !== -1 && index !== SAME_NUMBER_INDEX;
    }).length;

    return COUNT ? `${COUNT}볼` : "";
  }

  is3Strike(otherBall) {
    if (!(this.number - otherBall.getNumber())) return true;

    return false;
  }
}

module.exports = Ball;
