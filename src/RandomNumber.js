const MissionUtils = require("@woowacourse/mission-utils");
const Constraints = require("./Constraints");

class RandomNumber {
  static makeRandomNumber() {
    const COMPUTER = [];

    while (COMPUTER.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);

      if (!COMPUTER.includes(number)) {
        COMPUTER.push(number);
      }
    }

    const constraints = new Constraints();
    constraints.checkConstraints(COMPUTER);

    return COMPUTER;
  }
}

module.exports = RandomNumber;
