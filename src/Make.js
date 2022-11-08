const { NOTHING, BALL, STRIKE } = require("./Constant");

function makeHint(strike, ball) {
  const res = [];
  if (strike === 0 && ball === 0) {
    res.push(NOTHING);
  } else {
    if (ball) res.push(`${ball}${BALL}`);
    if (strike) res.push(`${strike}${STRIKE}`);
  }
  return res.join(" ");
}

function makeBallStrikeCount(input, randomNumbers) {
  let strike = 0;
  let ball = 0;
  const userNums = input.split("").map(Number);
  userNums.forEach((userNum, index) => {
    if (userNum === randomNumbers[index]) {
      strike += 1;
    } else if (randomNumbers.indexOf(userNum) !== -1) {
      ball += 1;
    }
  });

  return { strike, ball };
}

module.exports = { makeHint, makeBallStrikeCount };
