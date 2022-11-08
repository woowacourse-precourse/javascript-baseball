const MissionUtils = require("@woowacourse/mission-utils");

class Computer {
  makeRandomNum() {
    const computerRandomNum = [];
    while (computerRandomNum.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computerRandomNum.includes(number)) {
        computerRandomNum.push(number);
      }
    }
    return computerRandomNum.join("");
  }
}

module.exports = Computer;
