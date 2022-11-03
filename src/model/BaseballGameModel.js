const { GAME_RULE } = require('../utils/constant');
const { getRandomNumber } = require('../utils/missionUtils');

class BaseballGameModel {
  constructor() {
    this.computerValue = '';
    this.userValue = '';
  }

  getRandomNumbers() {
    const randomNumbers = [];
    while (randomNumbers.length < GAME_RULE.NUMBERS_LENGTH) {
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

module.exports = BaseballGameModel;
