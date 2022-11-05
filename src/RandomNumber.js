const { Random } = require('@woowacourse/mission-utils');
const { RANDOMLIST } = require('../src/utils/constants');

class RandomNumber {
  static makeNew() {
    const result = [];

    while (result.length < 3) {
      const randomNum = Random.pickNumberInRange(RANDOMLIST.STARTPOINT, RANDOMLIST.ENDPOINT);
      !result.includes(randomNum) && result.push(randomNum);
    }

    return result;
  }
}

module.exports = RandomNumber;
