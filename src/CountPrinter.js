const { print, close, readLine, pickNumberInRange } = require("./Utils");
const { GAME_MSG, BASEBALL_MSG } = require("./Message");
const Counter = require("./Counter");
const { MAX_NUM_RANGE, MIN_UUM_RANGE, COMPUTER_NUM_LENGTH, RESTART_INPUT_NUM, END_INPUT_NUM } = require("./Condition");

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