const MissionUtils = require('@woowacourse/mission-utils');
const { Random } = MissionUtils;

class Computer {
  createComputerNum() {
    const randomNumberSet = new Set();
    while (randomNumberSet.size < 3) {
      randomNumberSet.add(Random.pickNumberInRange(1, 9));
    }
    return [...randomNumberSet].join('');
  }
}

module.exports = Computer;
