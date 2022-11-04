const MissionUtils = require('@woowacourse/mission-utils');

function randomNum(){
  const numEach = new Set();
  while (numEach.size < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    numEach.add(number);
  }
  return parseInt(Array.from(numEach).join(''));
}

module.exports = randomNum;
