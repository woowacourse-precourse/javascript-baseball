function getSumOfBallAndStrike(computerNum, userNum) {
  const cntOfBallAndStrike = userNum.reduce((acc, cur) => {
    return acc + (computerNum.includes(cur) | 0);
  }, 0);
  return cntOfBallAndStrike;
}

function getStrikeCnt(computerNum, userNum) {
  const strikeCnt = userNum.reduce((acc, cur, idx) => {
    return acc + ((computerNum[idx] === cur) | 0);
  }, 0);
  return strikeCnt;
}

module.exports = { getSumOfBallAndStrike, getStrikeCnt };
