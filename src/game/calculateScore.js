const calculateScore = (userInputNumber, computerRandomNumber) => {
  let strikeScore = 0;
  let ballScore = 0;
  userInputNumber.forEach((digit, digitIndex) => {
    if (digit === computerRandomNumber[digitIndex]) {
      strikeScore += 1;
    } else if (computerRandomNumber.includes(digit)) {
      ballScore += 1;
    }
  });

  return [strikeScore, ballScore];
};

module.exports = calculateScore;
