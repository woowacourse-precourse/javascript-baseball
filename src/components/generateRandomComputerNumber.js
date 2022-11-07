const MissionUtils = require('@woowacourse/mission-utils');

function generateRandomComputerNumber() {
  const RANDOM_NUMBER_ARRAY = [];

  while (RANDOM_NUMBER_ARRAY.length < 3) {
    const RANDOM_NUMBER = MissionUtils.Random.pickNumberInRange(1, 9);

    if (!RANDOM_NUMBER_ARRAY.includes(RANDOM_NUMBER)) {
      RANDOM_NUMBER_ARRAY.push(RANDOM_NUMBER);
    }
  }

  return RANDOM_NUMBER_ARRAY.join('');
}

module.exports = generateRandomComputerNumber;
