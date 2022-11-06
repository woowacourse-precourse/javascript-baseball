const { Random } = require('@woowacourse/mission-utils');
const { rule } = require('../constants');

class BaseballComputer {
  constructor() {
    this.numbers = [];
  }

  setNumbers() {
    const numbers = new Set();

    while (numbers.size < rule.LENGTH) {
      const number = Random.pickNumberInRange(rule.RANGE_START, rule.RANGE_END);
      numbers.add(String(number));
    }

    this.numbers = [...numbers];
  }
}

module.exports = BaseballComputer;
