const { Random } = require("@woowacourse/mission-utils");

const Ball = require("../Ball/Ball");

class AutomaticBallGenerator {
  startNumber = 1;
  endNumber = 9;
  maxNumberCount = 3;

  execute() {
    const { startNumber, endNumber, maxNumberCount } = this;
    const NUMBER = this.arrayToNumber(
      Random.pickUniqueNumbersInRange(startNumber, endNumber, maxNumberCount)
    );

    return Promise.resolve(new Ball(NUMBER));
  }

  arrayToNumber(numberArray) {
    return Number(
      numberArray.map(String).reduce((string, digit) => string + digit)
    );
  }
}

module.exports = AutomaticBallGenerator;
