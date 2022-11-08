const MissionUtils = require('@woowacourse/mission-utils');

class Random {
  static pickNumberInRange(min, max) {
    return MissionUtils.Random.pickNumberInRange(min, max);
  }
}

module.exports = Random;
