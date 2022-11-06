function getResult(answer, input) {
  return [getStrikeCount(answer, input), getBallCount(answer, input)];
}
function getBallCount(answer, input) {
  let ballCount = 0;
  input.split("").forEach((eachNumber, index) => {
    if (answer.includes(eachNumber) && answer.indexOf(eachNumber) !== index) {
      ballCount++;
    }
  });

  return ballCount;
}
function getStrikeCount(answer, input) {
  let strikeCount = 0;
  input.split("").forEach((eachNumber, index) => {
    if (answer.includes(eachNumber) && answer.indexOf(eachNumber) === index) {
      strikeCount++;
    }
  });

  return strikeCount;
}
function getString(strike, ball) {}

exports.getResult = getResult;
exports.getString = getString;
