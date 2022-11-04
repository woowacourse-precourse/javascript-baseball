const calculateStrike = (computerNumbers, inputNumbers) => {
  const excludedStrikeNumbers = computerNumbers.filter(
    (number, index) => number !== inputNumbers[index],
  );
  const strikeCount = computerNumbers.length - excludedStrikeNumbers.length;
  return [excludedStrikeNumbers, strikeCount];
};

const calculateBall = (excludedStrikeNumbers, inputNumbers) => {
  const excludedBallNumbers = excludedStrikeNumbers.filter(
    (number) => !inputNumbers.includes(number),
  );
  const ballCount = excludedStrikeNumbers.length - excludedBallNumbers.length;
  return [excludedBallNumbers, ballCount];
};

const calculateScore = (computerNumbers, inputNumbers) => {
  const score = { strike: 0, ball: 0, isNothing: false };

  const [excludedStrike, strikeCount] = calculateStrike(
    computerNumbers,
    inputNumbers,
  );
  score.strike = strikeCount;
  if (score.strike === 3) return score;

  const [excludedBall, ballCount] = calculateBall(excludedStrike, inputNumbers);
  score.ball = ballCount;
  if (excludedBall.length === 3) score.isNothing = true;
  return score;
};

module.exports = calculateScore;
