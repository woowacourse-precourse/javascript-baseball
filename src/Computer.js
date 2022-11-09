const { USER_INPUT_LENGTH } = require("./Constant");
const MissionUtils = require("@woowacourse/mission-utils");

class Computer {
  constructor(computerRandomNumberArray = []) {
    this.computerRandomNumberArray = computerRandomNumberArray;
  }

  makeRandomNumberArray() {
    const computerRandomNumberArray = [];

    while (computerRandomNumberArray.length < USER_INPUT_LENGTH) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);

      if (!computerRandomNumberArray.includes(number)) {
        computerRandomNumberArray.push(number);
      }
    }

    this.computerRandomNumberArray = computerRandomNumberArray;
  }
}

module.exports = Computer;
