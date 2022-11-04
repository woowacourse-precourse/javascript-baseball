const MissionUtils = require("@woowacourse/mission-utils");
const CheckConstraints = require("../src/CheckConstraints");

class MakeRandomNumber {
  static makeRandomNumber() {
    const COMPUTER = [];

    while (COMPUTER.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);

      if (!COMPUTER.includes(number)) {
        COMPUTER.push(number);
      }
    }

    const checkConstraints = new CheckConstraints();
    checkConstraints.checkConstraints(COMPUTER);

    return COMPUTER;
  }
}

module.exports = MakeRandomNumber;
