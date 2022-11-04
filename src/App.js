const MissionUtils = require('@woowacourse/mission-utils');

class App {
  static generateTargetNumber() {
    const target = [];

    while (target.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!target.includes(number)) target.push(number);
    }
    return target;
  }
}

module.exports = App;
