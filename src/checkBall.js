function checkBall(solution, answer) {
  let numberOfBall = 0;

  solution.forEach((number, index) => {
    if (answer.includes(number) && index != answer.indexOf(number)) {
      numberOfBall++;
    }
  });

  return numberOfBall;
}

module.exports = checkBall;
