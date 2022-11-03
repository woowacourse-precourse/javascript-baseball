function checkStrike(solution, answer) {
  let numberOfStrike = 0;

  solution.forEach((number, index) => {
    if (number === answer[index]) {
      numberOfStrike++;
    }
  });

  return numberOfStrike;
}

function checkBall(solution, answer) {
  let numberOfBall = 0;

  solution.forEach((number, index) => {
    if (answer.includes(number) && index != answer.indexOf(number)) {
      numberOfBall++;
    }
  });

  return numberOfBall;
}
