const MissionUtils = require("@woowacourse/mission-utils");

class PickThreeRandomNumFrom1To9 {
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
    return MissionUtils.Random.pickNumberInRange(
      this.RANGE_START_NUM,
      this.RANGE_END_NUM
    );
  }

  pushRandomNumWithoutDuplication() {
    if (this.size() === this.NUM_RANDOM_NUMS_REQUIRED) return;

    let randomNum = this.pickRandomNum();
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

module.exports = PickThreeRandomNumFrom1To9;
