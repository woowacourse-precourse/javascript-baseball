const MissionUtils = require("@woowacourse/mission-utils");

function randomNum(){
  const numeach = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
  return parseInt(numeach.join(''));
}

module.exports = randomNum;