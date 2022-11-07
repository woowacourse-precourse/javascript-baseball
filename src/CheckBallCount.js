const CheckBallCount = (targetNumber, userGuessedNumber) => {
  let ball = 0;
  let strike = 0;
  userGuessedNumber.forEach((el, idx) => {
    let isIncludes = targetNumber.includes(el);
    let isBallOrStrike = targetNumber[idx] === el;
    isIncludes ? (isBallOrStrike ? strike++ : ball++) : "";
  });

  return [ball, strike];
};

module.exports = CheckBallCount;
