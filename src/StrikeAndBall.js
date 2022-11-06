function getResult(answer, input) {}
function getBallCount(answer, input) {
  let ballCount = 0;
  input.split("").forEach((eachNumber, index) => {
    if (answer.includes(eachNumber) && answer.indexOf(eachNumber) !== index) {
      ballCount++;
    }
  });

  return ballCount;
}
function getStrikeCount(answer, input) {}
function getString(strike, ball) {}

exports.getResult = getResult;
exports.getString = getString;
