const generateResultMessage = (strikeCount, ballCount) => {
  if (strikeCount === 0 && ballCount === 0) {
    return `낫싱`;
  }
  if (strikeCount === 0) {
    return `${ballCount}볼`;
  }
  if (ballCount === 0) {
    return `${strikeCount}스트라이크`;
  }
  return `${ballCount}볼 ${strikeCount}스트라이크`;
};
