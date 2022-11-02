const MissionUtils = require('@woowacourse/mission-utils');

class BaseballGameModel {
  constructor() {
    this.computerValue = '';
  }

  setComputerValue() {
    const computerValueArray = [];
    while (computerValueArray.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computerValueArray.includes(number)) {
        computerValueArray.push(number);
      }
    }
    this.computerValue = computerValueArray.join('');
  }
}

module.exports = BaseballGameModel;
