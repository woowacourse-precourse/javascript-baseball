const { Random } = require('@woowacourse/mission-utils');
const { NUMBER_LIMIT } = require('../constant/baseball');

class Computer {
  makeNumbers() {
    const randomNumbers = [];

    while (randomNumbers.length < NUMBER_LIMIT) {
      const number = Random.pickNumberInRange(1, 9);

      if (randomNumbers.includes(number) === false) {
        randomNumbers.push(number);
      }
    }

    return randomNumbers.join('');
  }
}

module.exports = Computer;
