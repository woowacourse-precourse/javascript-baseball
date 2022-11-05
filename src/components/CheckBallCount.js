const CheckBallCount = (targetNumber, userGuessedNumber) => {
  let ball = 0;
  let strike = 0;

  for (let idx = 0; idx < userGuessedNumber.length; idx++) {
    let isIncludes = targetNumber.includes(userGuessedNumber[idx]);
    let isBallOrStrike = targetNumber[idx] === userGuessedNumber[idx];
    isIncludes ? (isBallOrStrike ? strike++ : ball++) : null;
  }

  return [ball, strike];
};

module.exports = CheckBallCount;
