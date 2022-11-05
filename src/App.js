const MissionUtils = require('@woowacourse/mission-utils');

const { Random } = MissionUtils;

class App {
  constructor() {
    this.computerNum = [];
  }
  play() {}

  createComputerNum() {
    const randomNumberSet = new Set();
    while (randomNumberSet.size < 3) {
      randomNumberSet.add(Random.pickNumberInRange(1, 9));
    }
    this.computerNum = [...randomNumberSet];
    return this.computerNum.join('');
  }
}

module.exports = App;
