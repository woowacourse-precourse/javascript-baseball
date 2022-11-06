const MissionUtils = require("@woowacourse/mission-utils");
const { LENGTH, RANGE } = require("./Constant.js");

class Computer {
  makeRandomNum() {
    this.number = MissionUtils.Random.pickUniqueNumbersInRange(
      RANGE.MIN,
      RANGE.MAX,
      LENGTH
    );
    return this.number.join("");
  }
}

module.exports = Computer;
