const { GAME_MESSAGE } = require("../constants");

const getPrintScore = (score) => {
  const strike = score.STRIKE;
  const ball = score.BALL;

  if (strike === 0 && ball === 0) {
    return GAME_MESSAGE.NOTHING;
  }

  if (strike > 0 && ball === 0) {
    return `${strike}${GAME_MESSAGE.STRIKE}`;
  }

  if (strike === 0 && ball < 0) {
    return `${ball}${GAME_MESSAGE.BALL}`;
  }

  return `${ball}${GAME_MESSAGE.BALL} ${strike}${GAME_MESSAGE.STRIKE}`;
};

module.exports = getPrintScore;
