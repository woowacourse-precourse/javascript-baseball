const MissionUtils = require('@woowacourse/mission-utils');

class BaseballGame {
  constructor() {
    this.computerNumber = [];
  }

  createComputerNumber() {
    const computerNumber = new Set();
    while (computerNumber.size < 3) {
      computerNumber.add(MissionUtils.Random.pickNumberInRange(1, 9));
    }
    return Array.from(computerNumber);
  }
}

module.exports = BaseballGame;
