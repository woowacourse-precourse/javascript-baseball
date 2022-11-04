class BaseballModel {
  constructor(strike, ball, nothing) {
    this.strike = strike;
    this.ball = ball;
    this.nothing = nothing;
  }

  getStrikeScore() {
    return this.strike;
  }
  getBallScore() {
    return this.ball;
  }
  getNothing() {
    return "낫싱";
  }
}

module.exports = BaseballModel;
