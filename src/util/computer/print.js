function getPrint(ball, strike) {
  if (ball === 0 && strike === 0) return "낫싱";
  if (ball && strike === 0) return `${ball}볼`;
  if (ball === 0 && strike) return `${strike}스트라이크`;
  if (ball && strike) return `${ball}볼 ${strike}스트라이크`;

  throw "올바르지 못한 인자값입니다.";
}

module.exports = { getPrint };
