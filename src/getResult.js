function checkStrike(solution, answer) {
  let numberOfStrike = 0;

  solution.forEach((number, index) => {
    if (number === answer[index]) {
      numberOfStrike++;
    }
  });

  return numberOfStrike;
}
