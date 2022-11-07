const MissionUtils = require('@woowacourse/mission-utils');
const { GENERATE_RANGE } = require('../constant');

function getRandomNumbers() {
  const Numbers = [];
  while (Numbers.length < GENERATE_RANGE.MAX_SIZE) {
    const number = MissionUtils.Random.pickNumberInRange(
      GENERATE_RANGE.MINIMUM_VALUE,
      GENERATE_RANGE.MAXIMUM_VALUE
    );
    if (!Numbers.includes(number)) {
      Numbers.push(number);
    }
  }

  return Numbers;
}

module.exports = getRandomNumbers;
