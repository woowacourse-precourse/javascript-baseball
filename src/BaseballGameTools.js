const { Random } = require('@woowacourse/mission-utils');
const { CONSTANT } = require('./Constant');

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
}

module.exports = BaseballGameTools;
