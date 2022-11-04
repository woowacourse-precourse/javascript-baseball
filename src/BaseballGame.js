const MissionUtils = require('@woowacourse/mission-utils');

class BaseballGame {
  constructor() {
    this.computerNumber = [];
  }

  start() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    this.computerNumber = this.createComputerNumber();
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
