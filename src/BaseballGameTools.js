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

  static getBaseballResultMessage(answerArray, playerInput) {
    const playerGuessArray = playerInput.split('').map((digit) => Number(digit));
    let [strike, ball] = [0, 0];
    let baseballResult;

    playerGuessArray.forEach((currentDigit, index) => {
      const searchResult = answerArray.indexOf(currentDigit);

      if (searchResult === index) {
        strike += 1;
      } else if (searchResult !== -1) {
        ball += 1;
      }
    });

    if (strike > 0 && ball > 0) {
      baseballResult = `${ball}볼 ${strike}스트라이크`;
    } else if (strike > 0) {
      baseballResult = `${strike}스트라이크`;
    } else if (ball > 0) {
      baseballResult = `${ball}볼`;
    } else {
      baseballResult = '낫싱';
    }

    return baseballResult;
  }
}

module.exports = BaseballGameTools;
