const { RESULT } = require('../constants');

function countStrike(computerNums, userInputNums) {
  let strikeCount = 0;
  const computerNumsArr = computerNums.split('');
  const userInputNumsArr = userInputNums.split('');

  computerNumsArr.map((num, index) => {
    if (num === userInputNumsArr[index]) strikeCount += 1;
    return num;
  });

  return strikeCount;
}

function countBall(computerNums, userInputNums) {
  let ballCount = 0;
  const computerNumsArr = computerNums.split('');
  const userInputNumsArr = userInputNums.split('');

  computerNumsArr.map((num, index) => {
    if (index === 0 && (num === userInputNumsArr[1] || num === userInputNumsArr[2])) ballCount += 1;
    if (index === 1 && (num === userInputNumsArr[0] || num === userInputNumsArr[2])) ballCount += 1;
    if (index === 2 && (num === userInputNumsArr[0] || num === userInputNumsArr[1])) ballCount += 1;
    return num;
  });

  return ballCount;
}

function compareInputNum(computerNums, userInputNums) {
  const strikeCount = countStrike(computerNums, userInputNums);
  const ballCount = countBall(computerNums, userInputNums);

  if (strikeCount === 0 && ballCount === 0) return RESULT.NOTHING;
  if (ballCount === 0) return `${strikeCount}${RESULT.STRIKE}`;
  if (strikeCount === 0) return `${ballCount}${RESULT.BALL}`;
  return `${ballCount}${RESULT.BALL} ${strikeCount}${RESULT.STRIKE}`;
}

exports.compareInputNum = compareInputNum;
