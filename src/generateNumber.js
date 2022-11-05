const MissionUtils = require('@woowacourse/mission-utils');

function generateNumber() {
  const uniqueNumArr = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
  return uniqueNumArr;
}

module.exports = generateNumber;
