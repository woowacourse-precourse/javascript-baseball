const { Random } = require('@woowacourse/mission-utils');
const { NUMBERS_RULES } = require('../static/constants');

const createRandomNumbers = () => Random.pickUniqueNumbersInRange(
  NUMBERS_RULES.minOfRange,
  NUMBERS_RULES.maxOfRange,
  NUMBERS_RULES.digit,
);

module.exports = createRandomNumbers;
