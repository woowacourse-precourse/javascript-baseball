class BaseballModel {
  constructor(randomNumber) {
    this.randomNumber = randomNumber;
  }
  strike = null;
  ball = null;
  nothing = "낫싱";

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
