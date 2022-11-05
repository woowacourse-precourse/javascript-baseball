const { Random } = require('@woowacourse/mission-utils');
const { NUMBERS_RULES } = require('../static/constants');

const createRandomNumbers = () => {
  const numbers = new Set();

  while (numbers.size < NUMBERS_RULES.digit) {
    const number = Random.pickNumberInRange(NUMBERS_RULES.minOfRange, NUMBERS_RULES.maxOfRange);
    numbers.add(number);
  }

  return [...numbers];
};

module.exports = createRandomNumbers;
