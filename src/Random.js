const MissionUtils = require('@woowacourse/mission-utils');

class Random {
  #random = MissionUtils.Random.pickNumberInRange;

  #getRandom(startIndex, endIndex) {
    return this.#random(startIndex, endIndex);
  }

  getThreeRandomArray() {
    const randomRange = [[1, 3], [4, 6], [7, 9]];

    return randomRange.map(([startIndex, endIndex]) => this.#getRandom(startIndex, endIndex));
  }
}

module.exports = Random;
