class GameData {
  constructor() {
    this.state = true;
    this.ball = 0;
    this.strike = 0;
  }

  getState() {
    return this.state;
  }

  setState(state) {
    this.state = state;
  }

  getBall() {
    return this.ball;
  }

  setBall(ball) {
    this.ball = ball;
  }

  getStrike() {
    return this.strike;
  }

  setStrike(strike) {
    this.strike = strike;
  }
}

module.exports = GameData;
