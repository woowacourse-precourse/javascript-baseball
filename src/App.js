const MissionUtils = require('@woowacourse/mission-utils');

const { Random } = MissionUtils;
class App {
  play() {}

  randomGenerator() {
    const ret = [];
    while (ret.length < 3) {
      const num = Random.pickNumberInRange(1, 9);
      if (ret.indexOf(num) === -1) ret.push(num);
    }
    return ret;
  }
}

module.exports = App;
