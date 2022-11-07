const { Random } = require('@woowacourse/mission-utils');
const { MESSAGE, CONSTANT, REGEX } = require('./Constant');

class BaseballGameTools {
  static getThreeNumber() {
    const randomNumberArray = [];
    while (randomNumberArray.length < CONSTANT.DIGIT_LIMIT) {
      let chosenNumber;

      do {
        chosenNumber = Random.pickNumberInRange(1, 9);
      } while (randomNumberArray.indexOf(chosenNumber) !== -1);

      randomNumberArray.push(chosenNumber);
    }

    return randomNumberArray;
  }

  static errorIfInvalidGuessFormat(playerGuess) {
    if (!REGEX.GUESS.test(playerGuess) || new Set(playerGuess.split('')).size !== 3) {
      throw Error(MESSAGE.FORMAT_ERROR_GUESS);
    }
  }

  static errorIfInvalidChoiceFormat(playerChoice) {
    if (!REGEX.CHOICE.test(playerChoice)) {
      throw Error(MESSAGE.FORMAT_ERROR_CHOICE);
    }
  }
}

module.exports = BaseballGameTools;
