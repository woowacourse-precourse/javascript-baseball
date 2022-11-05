const calculateStrike = (nbrOfComputer, nbrOfTryGuess) => {
  const excludedStrikeNumbers = nbrOfComputer.filter(
    (number, index) => number !== nbrOfTryGuess[index],
  );

  const strikeCount = nbrOfComputer.length - excludedStrikeNumbers.length;

  return [excludedStrikeNumbers, strikeCount];
};

const calculateBall = (excludedStrikeNumbers, nbrOfTryGuess) => {
  const excludedBallNumbers = excludedStrikeNumbers.filter(
    (number) => !nbrOfTryGuess.includes(number),
  );

  const ballCount = excludedStrikeNumbers.length - excludedBallNumbers.length;

  return [excludedBallNumbers, ballCount];
};

const calculateScore = (nbrOfComputer, nbrOfTryGuess) => {
  const score = { strikeCount: 0, ballCount: 0, isNothing: false };

  const [excludedStrikeNumbers, strikeCount] = calculateStrike(
    nbrOfComputer,
    nbrOfTryGuess,
  );
  score.strikeCount = strikeCount;
  if (score.strikeCount === 3) return score;

  const [excludedBallNumbers, ballCount] = calculateBall(
    excludedStrikeNumbers,
    nbrOfTryGuess,
  );
  score.ballCount = ballCount;
  if (excludedBallNumbers.length === 3) score.isNothing = true;
  return score;
};

module.exports = calculateScore;
