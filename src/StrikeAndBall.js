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

const getStrikeAndBallText = (strike, ball) => {
  if (strike === 0 && ball === 0) return "낫싱";
  const output = (ball ? `${ball}볼 ` : ``) + (strike ? `${strike}스트라이크` : ``);

  return output.trim();
};

module.exports = {
  getStrikeAndBall,
  getStrikeAndBallText,
};
