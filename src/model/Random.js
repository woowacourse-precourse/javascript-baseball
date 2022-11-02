const MissionUtils = require("@woowacourse/mission-utils");

function randomNum(){
  const numEach = [];
  while (numEach.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!numEach.includes(number)) {
      numEach.push(number);
    }
  }
  return parseInt(numEach.join(''));
}

module.exports = randomNum;