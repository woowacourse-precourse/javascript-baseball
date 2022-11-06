const MissionUtils = require("@woowacourse/mission-utils");

class Question {
  static create() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
  }
}

module.exports = Question;
