const makeNumber = () => {
  const MissonUtils = require('@woowacourse/mission-utils');
  const result = MissonUtils.Random.pickUniqueNumbersInRange(1, 10, 3);
  return result;
}

module.exports = makeNumber;