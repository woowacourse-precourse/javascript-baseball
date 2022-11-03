const { RESULT } = require("../constants/index");

const getStrikeBallCount = (userNumber, computerNumber) => {
  let strike = 0;
  let ball = 0;

  for (let i = 0; i < computerNumber.length; i += 1) {
    if (computerNumber[i] === userNumber[i]) strike += 1;
    else if (userNumber.includes(computerNumber[i])) ball += 1;
  }

  return {
    strike,
    ball,
  };
};

const getHint = (userNumber, computerNumber) => {
  const { strike, ball } = getStrikeBallCount(userNumber, computerNumber);

  if (ball === 0 && strike !== 0) return `${strike}${RESULT.STRIKE}`;
  if (strike === 0 && ball !== 0) return `${ball}${RESULT.BALL}`;

  return `${ball}${RESULT.BALL} ${strike}${RESULT.STRIKE}`;
};

module.exports = { getHint };
