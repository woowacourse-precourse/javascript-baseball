const getBallCount = (answer, input) => {
  let ballCount = 0;
  input.split("").forEach((eachNumber, index) => {
    if (answer.includes(eachNumber) && answer.indexOf(eachNumber) !== index) {
      ballCount++;
    }
  });

  return ballCount;
};

const getStrikeCount = (answer, input) => {
  let strikeCount = 0;
  input.split("").forEach((eachNumber, index) => {
    if (answer.includes(eachNumber) && answer.indexOf(eachNumber) === index) {
      strikeCount++;
    }
  });

  return strikeCount;
};

const getStrikeAndBall = (answer, input) => {
  return [getStrikeCount(answer, input), getBallCount(answer, input)];
};

module.exports = getStrikeAndBall;
