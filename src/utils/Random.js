const MissionUtils = require('@woowacourse/mission-utils');

const random = {
  pickNumberInRange() {
    return MissionUtils.Random.pickNumberInRange(1, 9);
  },
};

module.exports = random;
