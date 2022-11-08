const MissionUtils = require('@woowacourse/mission-utils');
const isAvailableValue = require('./utils/isAvailableValue');

class Computer {
  #value;
  constructor() {
    this.#value = '';
  }

  getValue() {
    return this.#value;
  }

  setValue() {
    const randomValue = this.generatorComputerValue();
    if (isAvailableValue(randomValue)) this.#value = randomValue;
    else throw new Error('시스템 오류로 인해 게임을 종료합니다.');
  }

  generatorComputerValue() {
    let computerValue = '';
    let randomNumber;

    while (computerValue.length < 3) {
      randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computerValue.includes(randomNumber)) computerValue += randomNumber;
    }

    return computerValue;
  }
}

module.exports = Computer;
