const { Random } = require("@woowacourse/mission-utils");

class CPU {
  constructor() {
    this.targetNumber = "";
  }
  makeTargetNumber = () => {
    this.targetNumber = Random.pickUniqueNumbersInRange(1, 9, 3).join("");
  };
}

module.exports = {
  CPU,
};
