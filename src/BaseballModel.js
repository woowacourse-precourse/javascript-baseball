class BaseballModel {
  constructor(randomNumber) {
    this.randomNumber = randomNumber;
  }
  strike = 0;
  ball = 0;

  getRandom() {
    return this.randomNumber;
  }
  getStrikeScore() {
    return this.strike;
  }
  getBallScore() {
    return this.ball;
  }
  getNothing() {
    return this.nothing;
  }
}

module.exports = BaseballModel;
