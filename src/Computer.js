const { Random } = require('@woowacourse/mission-utils');

class Computer {
  static createUniqueNumbers(start, end, count) {
    const numberSet = new Set();

    while (numberSet.size !== count) {
      const number = Random.pickNumberInRange(start, end);
      if (!numberSet.has(number)) numberSet.add(number);
    }

    return [...numberSet];
  }
}

module.exports = Computer;
