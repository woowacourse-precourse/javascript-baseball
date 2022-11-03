const { getRandomNumber } = require('../utils/missionUtils');

class BaseballModel {
  constructor() {
    this.computerValue = '';
    this.userValue = '';
  }

  getRandomNumbers() {
    const randomNumbers = [];
    while (randomNumbers.length < 3) {
      const number = getRandomNumber();
      if (!randomNumbers.includes(number)) {
        randomNumbers.push(number);
      }
    }
    return randomNumbers.join('');
  }

  setUserValue(data) {
    this.userValue = data;
  }

  setComputerValue(data) {
    this.computerValue = data;
  }
}

module.exports = BaseballModel;
