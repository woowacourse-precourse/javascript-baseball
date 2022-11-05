const strikeCount = (numArr, answer) => {
  return numArr.filter((number, i) => number === answer[i]).length;
};

const ballCount = (numArr, answer) => {
  return numArr.filter(
    (number, i) => answer.includes(number) && number !== answer[i]
  ).length;
};

const isNothing = (strikeCount, ballCount) => strikeCount + ballCount === 0;

const checkCount = (numArr, answer) => {
  const strikeCnt = strikeCount(numArr, answer);
  const ballCnt = ballCount(numArr, answer);
  return [strikeCnt, ballCnt];
};

module.exports = { checkCount, strikeCount, ballCount, isNothing };
