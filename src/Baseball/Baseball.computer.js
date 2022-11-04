const MissionUtils = require("@woowacourse/mission-utils");

class BaseballComputer {
  baseballNumber = [];
  baseballOutput = new BaseballOutput();
  constructor() {
    this.baseballNumber = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
  }
}

export default BaseballComputer;
