const { Random } = require("@woowacourse/mission-utils");
const { NUMBER_COUNT } = require("../constant/message.constant");

class Computer {
  setRandomNumbers() {
    const randomNumbers = [];

    while (randomNumbers.length < NUMBER_COUNT) {
      const number = Random.pickNumberInRange(1, 9);

      if (randomNumbers.includes(number) === false) {
        randomNumbers.push(number);
      }
    }

    return randomNumbers.join("");
  }
}

module.exports = Computer;
