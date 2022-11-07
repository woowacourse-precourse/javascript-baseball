const checkBall = (computer, userInput) => {
  let countBall = 0;

  Array.from(userInput, Number).map((currentValue, index) => {
    if (
      computer.includes(currentValue) &&
      computer.indexOf(currentValue) !== index
    ) {
      countBall += 1;
    }

    return countBall;
  });

  return countBall
};

module.exports = checkBall;
