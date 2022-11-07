const getScore = (input, answer) => {
  let strike = 0;
  let ball = 0;
  input.forEach((num, idx) => {
    if (isStrike(num, idx, answer)) {
      strike++;
    } else if (isBall(num, idx, answer)) {
      ball++;
    }
  });
  return { strike: strike, ball: ball };
};

const isStrike = (userNum, userIdx, answer) => {
  if (answer.includes(userNum) && answer.indexOf(userNum) === userIdx) {
    return true;
  }
};
const isBall = (userNum, userIdx, answer) => {
  if (answer.includes(userNum) && answer.indexOf(userNum) !== userIdx) {
    return true;
  }
};

module.exports = getScore;
