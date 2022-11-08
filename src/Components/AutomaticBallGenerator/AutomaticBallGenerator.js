const { Random } = require("@woowacourse/mission-utils");

class AutomaticBallGenerator {
  startNumber = 1;
  endNumber = 9;
  maxNumberCount = 3;

  execute() {
    const { startNumber, endNumber, maxNumberCount } = this;

    return Random.pickUniqueNumbersInRange(
      startNumber,
      endNumber,
      maxNumberCount
    );
  }
}

module.exports = AutomaticBallGenerator;
