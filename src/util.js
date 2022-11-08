const { Random } = require('@woowacourse/mission-utils');

function makeRandomNumber(len, startNum, endNum) {
  const randomNumArr = [];
  while (randomNumArr.length < len) {
    const randomNum = Random.pickNumberInRange(startNum, endNum);
    if (!randomNumArr.includes(randomNum)) {
      randomNumArr.push(randomNum);
    }
  }
  return randomNumArr.join('');
}

function chkDuplicatedNumber(num, len) {
  const numArr = [...num];

  if (numArr.length !== len) return true;
  if (numArr.length !== [...new Set(numArr)].length) return true;
  for (let i = 0; i < numArr.length; i += 1) {
    if (!numArr[i].match(/^[1-9]+$/)) return true;
  }

  return false;
}

module.exports = {
  makeRandomNumber,
  chkDuplicatedNumber
};
