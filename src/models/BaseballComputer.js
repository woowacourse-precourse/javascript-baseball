const { Random } = require('@woowacourse/mission-utils');
const { RULE } = require('../constants/baseball');

class BaseballComputer {
  constructor() {
    this.numbers = [];
  }

  setNumbers() {
    const numbers = new Set();

    while (numbers.size < RULE.LENGTH) {
      const number = Random.pickNumberInRange(RULE.RANGE_START, RULE.RANGE_END);
      numbers.add(String(number));
    }

    this.numbers = [...numbers];
  }
}

module.exports = BaseballComputer;
