class GameData {
  constructor() {
    this.threeStrikeState = false;
    this.computerRandomNumbers = [];
    this.ball = 0;
    this.strike = 0;
  }

  getComputerRandomNumbers() {
    return this.computerRandomNumbers;
  }

  setComputerRandomNumbers(computerRandomNumbers) {
    this.computerRandomNumbers = computerRandomNumbers;
  }

  getThreeStrikeState() {
    return this.threeStrikeState;
  }

  setgetThreeStrikeState(threeStrikeState) {
    this.threeStrikeState = threeStrikeState;
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
