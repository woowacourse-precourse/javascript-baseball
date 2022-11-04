const MissionUtils = require('@woowacourse/mission-utils');

function generateNumber() {
  const uniqueNumArr = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
  const numSet = new Set(uniqueNumArr);

  return numSet;
}

module.exports = generateNumber;
