const MissionUtils = require("@woowacourse/mission-utils");

class ComputersNumber {
  computersNumber() {
    // console.log(MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3));
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
  }
}

module.exports = ComputersNumber;