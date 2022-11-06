const constants = require('./constants/constants');
const Mission = require('./Mission');

class Computer extends Mission {
  constructor() {
    super();
  }

  getRandomNumber() {
    return this.mission.Random.pickNumberInRange(
      constants.MIN_INPUT_NUMBER,
      constants.MAX_INPUT_NUMBER
    );
  }

  getComputerNumbers() {
    const computerNumbers = new Set();
    while (computerNumbers.size < constants.INPUT_SIZE) {
      computerNumbers.add(this.getRandomNumber());
    }

    return Array.from(computerNumbers);
  }
}

module.exports = Computer;
