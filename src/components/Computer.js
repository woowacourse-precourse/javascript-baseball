const { Random } = require('@woowacourse/mission-utils');
const { PICK_NUMBER } = require('../constants/game numbers');

class Computer {
  static getRandomNumber() {
    const computer = [];

    while (computer.length < PICK_NUMBER.PICK) {
      const number = Random.pickNumberInRange(PICK_NUMBER.MIN, PICK_NUMBER.MAX);

      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
  }
}

module.exports = { Computer };
