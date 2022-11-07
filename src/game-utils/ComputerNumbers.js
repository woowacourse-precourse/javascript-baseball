const { Random } = require("@woowacourse/mission-utils");

class ComputerNumbers {
  static randomSelectComputerNumbers() {
    const randomNumbers = [];
    while (randomNumbers.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (randomNumbers.includes(number) === false) {
        randomNumbers.push(number);
      }
    }

    return randomNumbers.join('');
  }
}

module.exports = ComputerNumbers;
