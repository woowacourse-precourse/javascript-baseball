const MissionUtils = require('@woowacourse/mission-utils');
const MESSAGE = require('./constants/message');

class Computer {
  static generatorComputerValue() {
    let computerValue = '';

    while (computerValue.length < 3) {
      let randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computerValue.includes(randomNumber)) computerValue += randomNumber;
    }

    return computerValue;
  }
}

module.exports = Computer;
