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
function getString(strike, ball) {
  if (strike === 0 && ball === 0) return "낫싱";
  const output =
    (ball ? `${ball}볼 ` : ``) + (strike ? `${strike}스트라이크` : ``);

  return output.trim();
}

exports.getResult = getResult;
exports.getString = getString;
