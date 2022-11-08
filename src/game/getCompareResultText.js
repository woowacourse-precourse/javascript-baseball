const getCompareResultText = (strikeScore, ballScore) => {
  let compareResultText = '';
  if (strikeScore === 0 && ballScore === 0) {
    compareResultText = '낫싱';
  } else if (ballScore === 0) {
    compareResultText = `${strikeScore}스트라이크`;
  } else if (strikeScore === 0) {
    compareResultText = `${ballScore}볼`;
  } else if (strikeScore > 0 && ballScore > 0) {
    compareResultText = `${ballScore}볼 ${strikeScore}스트라이크`;
  }

  return compareResultText;
};

module.exports = getCompareResultText;
