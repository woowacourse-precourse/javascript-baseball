const { getRandomNumber } = require('../utils/missionUtils');

class BaseballModel {
  constructor() {
    this.computerValue = '';
    this.userValue = '';
  }

  setComputerValue() {
    const computerValueArray = [];
    while (computerValueArray.length < 3) {
      const number = getRandomNumber();
      if (!computerValueArray.includes(number)) {
        computerValueArray.push(number);
      }
    }
    this.computerValue = computerValueArray.join('');
  }

  setUserValue(data) {
    this.userValue = data;
  }
}

module.exports = BaseballModel;
