const { RESULT } = require('./utils/constants');
const { NOTHING, BALL, STRIKE } = RESULT;

class Judge {
  static countExist(computer, player) {
    const computerSet = new Set(computer);
    const exists = player.filter((guess) => computerSet.has(guess));
    return exists.length;
  }

  static countStrike(computer, player) {
    const strikes = player.filter((guess, i) => guess === computer[i]);
    return strikes.length;
  }

  static getResult(computer, player) {
    const exist = this.countExist(computer, player);
    const strike = this.countStrike(computer, player);
    const ball = exist - strike;

    if (exist === 0) {
      return `${NOTHING}`;
    } else if (strike === 0) {
      return `${ball}${BALL}`;
    } else if (ball === 0) {
      return `${strike}${STRIKE}`;
    }

    return `${ball}${BALL} ${strike}${STRIKE}`;
  }
}

module.exports = Judge;
