function getBallString(ball) {
  if (ball !== 0) {
    return `${ball}볼 `;
  }
  return '';
}

function getStrikeString(strike) {
  if (strike !== 0) {
    return `${strike}스트라이크`;
  }
  return '';
}

function getGuessResult(ball, strike) {
  const ballString = getBallString(ball);
  const strikeString = getStrikeString(strike);

  return `${ballString}${strikeString}`;
}

module.exports = {
  getGuessResult,
};
