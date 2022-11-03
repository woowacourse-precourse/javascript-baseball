const Mission = require('./Mission');

class Computer extends Mission {
  constructor() {
    super();
  }
  getRandomNumber() {
    return this.mission.Random.pickNumberInRange(1, 9);
  }
  getComputerNumbers() {
    const computerNumbers = new Set();
    while (computerNumbers.size < 3) {
      computerNumbers.add(this.getRandomNumber());
    }
    return Array.from(computerNumbers);
  }
}

module.exports = Computer;
