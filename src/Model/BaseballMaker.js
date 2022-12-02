const MissionUtils = require("@woowacourse/mission-utils");

const BaseballMaker = {
  getRandomNumber() {
    const MIN_RANGE = 1;
    const MAX_RANGE = 9;
    const randomNumber = new Set();
    while (randomNumber.size !== 3) {
      randomNumber.add(
        MissionUtils.Random.pickNumberInRange(MIN_RANGE, MAX_RANGE)
      );}
    return [...randomNumber]
  }};

module.exports = BaseballMaker;
