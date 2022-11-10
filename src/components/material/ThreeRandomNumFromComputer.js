const { Random } = require('@woowacourse/mission-utils');

class ThreeRandomNumFromComputer {
  constructor() {
    this.randomNumsWithoutDuplication = [];
    this.NUM_RANDOM_NUMS_REQUIRED = 3;
    this.RANGE_START_NUM = 1;
    this.RANGE_END_NUM = 9;
  }

  size() {
    return this.randomNumsWithoutDuplication.length;
  }

  pickRandomNum() {
    return Random.pickNumberInRange(this.RANGE_START_NUM, this.RANGE_END_NUM);
  }

  pushRandomNumWithoutDuplication() {
    if (this.size() === this.NUM_RANDOM_NUMS_REQUIRED) return;

    const randomNum = this.pickRandomNum();
    if (this.randomNumsWithoutDuplication.includes(randomNum)) {
      return this.pushRandomNumWithoutDuplication();
    }
    this.randomNumsWithoutDuplication.push(randomNum);
    return this.pushRandomNumWithoutDuplication();
  }

  returnNumsWithoutDuplication() {
    this.pushRandomNumWithoutDuplication();
    return this.randomNumsWithoutDuplication;
  }
}

module.exports = ThreeRandomNumFromComputer;
