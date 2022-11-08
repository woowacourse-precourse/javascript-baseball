const { MESSAGE } = require('../static/constants');

const getBallAndStrikeMessage = ({ ball, strike }) => {
  if (ball > 0 && strike > 0) {
    return `${ball}${MESSAGE.resultBall} ${strike}${MESSAGE.resultStrike}`;
  }
  if (ball > 0) {
    return `${ball}${MESSAGE.resultBall}`;
  }
  if (strike > 0) {
    return `${strike}${MESSAGE.resultStrike}`;
  }
  return MESSAGE.resultNoting;
};

const countBallAndStrike = ({ computerNumbers, playerNumbers }) => {
  const result = { ball: 0, strike: 0 };

  playerNumbers.forEach((playerNumber, index) => {
    if (playerNumber === computerNumbers[index]) {
      result.strike += 1;
      return;
    }
    if (computerNumbers.includes(playerNumber)) {
      result.ball += 1;
    }
  });

  return result;
};

module.exports = { getBallAndStrikeMessage, countBallAndStrike };
