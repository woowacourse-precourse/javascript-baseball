const { Random } = require('@woowacourse/mission-utils');
const { MIN_NUMBER, MAX_NUMBER, VALUE_SIZE } = require('./constants/gameSetting');
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

    while (computerValue.length < VALUE_SIZE) {
      const randomNumber = Random.pickNumberInRange(MIN_NUMBER, MAX_NUMBER);
      if (!computerValue.includes(randomNumber)) computerValue.push(randomNumber);
    }

    return computerValue.join('');
  }
}

module.exports = Computer;
