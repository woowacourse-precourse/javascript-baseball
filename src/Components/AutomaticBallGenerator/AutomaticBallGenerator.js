const { Random } = require("@woowacourse/mission-utils");

const Ball = require("../Ball/Ball");

class AutomaticBallGenerator {
  startNumber = 1;
  endNumber = 9;
  maxNumberCount = 3;

  execute() {
    const { hasDuplicate, arrayToNumber } = this;
    const init = this.init.bind(this);
    let numberArray = init();

    while (hasDuplicate(numberArray)) {
      numberArray = init();
    }

    return new Ball(arrayToNumber(numberArray));
  }

  arrayToNumber(numberArray) {
    return Number(
      numberArray.map(String).reduce((string, digit) => string + digit)
    );
  }

  init() {
    const { startNumber, endNumber, maxNumberCount } = this;

    return Array.from({ length: maxNumberCount }, () =>
      Random.pickNumberInRange(startNumber, endNumber)
    );
  }

  hasDuplicate(numberArray) {
    return numberArray.some(
      (number, index, array) => index !== array.indexOf(number)
    );
  }
}

module.exports = AutomaticBallGenerator;
