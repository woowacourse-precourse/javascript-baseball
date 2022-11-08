const { Random } = require('@woowacourse/mission-utils');
const MESSAGE = require('./constants/message');
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
    else throw new Error(MESSAGE.ERROR.SYSTEM);
  }

  generatorComputerValue() {
    let computerValue = [];

    while (computerValue.length < 3) {
      const randomNumber = Random.pickNumberInRange(1, 9);
      if (!computerValue.includes(randomNumber)) computerValue.push(randomNumber);
    }

    return computerValue.join('');
  }
}

module.exports = Computer;
