const { Random } = require("@woowacourse/mission-utils");

class Computer {
  createRandomNum() {
    const random3 = Random.pickUniqueNumbersInRange(1, 9, 3);
    return random3.join("");
  }
}

module.exports = Computer;
