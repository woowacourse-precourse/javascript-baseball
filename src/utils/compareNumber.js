export const isCompare = (computerNumber, playerNumber) => {
  let score = [0, 0]; // [볼, 스트라이크]
  for (let i = 0; i < 3; i++) {
    if (computerNumber[i] === playerNumber[i]) {
      score[0] += 1;
    } else if (computerNumber.includes(playerNumber[i])) {
      score[1] += 1;
    }
  }
  return score;
};
