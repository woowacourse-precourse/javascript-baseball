const MissionUtils = require('@woowacourse/mission-utils');

class Computer {
  static generatorComputerValue() {
    let computerValue = [];

    while (computerValue.length < 3) {
      let randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computerValue.includes(randomNumber)) computerValue.push(randomNumber);
    }

    return computerValue.join('');
  }
}

module.exports = Computer;
