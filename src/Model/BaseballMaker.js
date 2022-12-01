const MissionUtils = require("@woowacourse/mission-utils");

const BaseballMaker = {
  getRandomNumber() {
    const MAX_RANGE = 9;
    const MIN_RANGE = 1;
    const randomNumber = new Set();
    while (randomNumber.size !== 3) {
      randomNumber.add(
        MissionUtils.Random.pickNumberInRange(MIN_RANGE, MAX_RANGE)
      );}
    const uniqueNumberList = [...randomNumber];
    this.uniqueNumberList = uniqueNumberList;
    return uniqueNumberList;
  }};

module.exports = BaseballMaker;
