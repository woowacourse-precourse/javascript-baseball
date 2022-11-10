const { NOTHING, STRIKE, BALL } = require('../constants/gameSetting');

function getGameResultMessage(ball, strike) {
  const nothingString = ball === 0 && strike === 0 ? `${NOTHING}` : '';
  const ballString = ball ? `${ball}${BALL} ` : '';
  const strikeString = strike ? `${strike}${STRIKE}` : '';

  return (nothingString + ballString + strikeString).trim();
}

module.exports = getGameResultMessage;
