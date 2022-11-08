const { print } = require("./Utils");
const { BASEBALL_MSG } = require("./Message");

class CountPrinter {

  ofBaseball(ball, strike) {
    this.strike(ball, strike);
    this.ball(ball, strike);
    this.nothing(ball, strike);
    this.ballAndStrike(ball, strike);
  }

  strike(ball, strike) {
    if (this.onlyStrike(ball, strike)) {
      return print(`${strike}${BASEBALL_MSG.STRIKE}`);
    }
  }
  ball(ball, strike) {
    if (this.onlyBall(ball, strike)) {
      return print(`${ball}${BASEBALL_MSG.BALL}`);
    }
  }
  nothing(ball, strike) {
    if (this.onlyNothing(ball, strike)) {
      return print(BASEBALL_MSG.NOTHING);
    }
  }
  ballAndStrike(ball, strike) {
    if (this.ballStrikeBoth(ball, strike)) {
      return print(`${ball}${BASEBALL_MSG.BALL} ${strike}${BASEBALL_MSG.STRIKE}`);
    }
  }

  onlyStrike(ball, strike) {
    return ball === 0 && strike !== 0;
  }

  onlyBall(ball, strike) {
    return ball !== 0 && strike === 0;
  }

  onlyNothing(ball, strike) {
    return ball === 0 && strike === 0;
  }

  ballStrikeBoth(ball, strike) {
    return ball !== 0 && strike !== 0;
  }
}

module.exports = CountPrinter;