const MissionUtils = require('@woowacourse/mission-utils');
const constant = require('../Constants');

function randomNum(){
  const numEach = new Set();
  while (numEach.size < constant.GAME.THREENUMBER) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    numEach.add(number);
  }
  return parseInt(Array.from(numEach).join(''));
}

module.exports = randomNum;
