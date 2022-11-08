const getStrikeAndBallText = (strike, ball) => {
  if (strike === 0 && ball === 0) return "낫싱";
  const output = (ball ? `${ball}볼 ` : ``) + (strike ? `${strike}스트라이크` : ``);

  return output.trim();
};

module.exports = getStrikeAndBallText;
