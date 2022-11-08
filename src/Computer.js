const { Random } = require("@woowacourse/mission-utils");

class Computer {
  pickRandomNumberSet() {
    let numberSet = new Set();

    while (numberSet.size < 3) {
      numberSet.add(Random.pickNumberInRange(1, 9));
    }

    return [...numberSet];
  }
}

module.exports = Computer;
