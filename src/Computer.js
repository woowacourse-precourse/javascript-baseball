const Mission = require('./Mission');

class Computer extends Mission {
  constructor() {
    super();
  }
  getRandomNumber() {
    return this.mission.Random.pickNumberInRange(1, 9);
  }
}

module.exports = Computer;
