const { COUNT_MESSAGE } = require('../constants/system message');
const { BASIC_NUMBER } = require('../constants/game numbers');
const { ErrorCheck } = require('./ErrorCheck');

class Game {
  static isEqual(num1, num2) {
    return num1 === num2;
  }

  static digitizeUserInput(userInput) {
    return [...userInput].map((num) => +num);
  }

  static getStrikeBallCount(baseballNumber, userInput) {
    const userInputNums = this.digitizeUserInput(userInput);
    let [STRIKE, BALL] = [BASIC_NUMBER.INIT, BASIC_NUMBER.INIT];

    baseballNumber.forEach((num, index) => {
      if (this.isEqual(num, userInputNums[index])) {
        STRIKE++;
      } else if (userInputNums.includes(num)) {
        BALL++;
      }
    });
    return [STRIKE, BALL];
  }

  static getStrikeBallMessage(STRIKE, BALL) {
    const ballMessage = BALL ? `${BALL}${COUNT_MESSAGE.BALL}` : '';
    const strikeMessage = STRIKE ? `${STRIKE}${COUNT_MESSAGE.STRIKE}` : '';

    return ErrorCheck.isNothing(STRIKE, BALL)
      ? COUNT_MESSAGE.NOTHING
      : `${ballMessage + strikeMessage}`;
  }
}

module.exports = { Game };
