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

module.exports = { makeHint };
