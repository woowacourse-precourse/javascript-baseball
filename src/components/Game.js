const { COUNT_MESSAGE } = require('../constants/system message');
const { GAME_NUMBER } = require('../constants/game numbers');
const { ErrorCheck } = require('./ErrorCheck');

class Game {
  static isEqual(elemA, elemB) {
    return elemA === elemB;
  }

  static digitizeUserInput(userInput) {
    return [...userInput].map((num) => +num);
  }

  static getStrikeBallCount(baseballNumber, userInput) {
    const userInputNums = this.digitizeUserInput(userInput);
    let [strikeCount, ballCount] = [GAME_NUMBER.INIT, GAME_NUMBER.INIT];

    baseballNumber.forEach((num, index) => {
      if (this.isEqual(num, userInputNums[index])) {
        strikeCount++;
      } else if (userInputNums.includes(num)) {
        ballCount++;
      }
    });
    return [strikeCount, ballCount];
  }

  static getStrikeBallMessage(strikeCount, ballCount) {
    const ballMessage = ballCount
      ? `${ballCount}${COUNT_MESSAGE.BALL}`
      : COUNT_MESSAGE.EMPTY;
    const strikeMessage = strikeCount
      ? `${strikeCount}${COUNT_MESSAGE.STRIKE}`
      : COUNT_MESSAGE.EMPTY;

    return ErrorCheck.isNothing(strikeCount, ballCount)
      ? COUNT_MESSAGE.NOTHING
      : `${ballMessage} ${strikeMessage}`.trim();
  }
}

module.exports = { Game };
