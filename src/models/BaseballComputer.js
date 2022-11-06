const { Random } = require('@woowacourse/mission-utils');
const { RULE } = require('../constants/baseball');

class BaseballComputer {
  constructor() {
    this.digits = [];
  }

  setDigits() {
    const digits = new Set();

    while (digits.size < RULE.LENGTH) {
      const digit = Random.pickNumberInRange(RULE.RANGE_START, RULE.RANGE_END);
      digits.add(String(digit));
    }

    this.digits = [...digits];
  }
}

module.exports = BaseballComputer;
