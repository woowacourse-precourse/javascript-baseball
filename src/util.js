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

module.exports = {
  makeRandomNumber
};
