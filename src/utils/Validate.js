const { BASEBALL, ERROR } = require('../constants/Constants');
const BaseballGameController = require('../BaseballGameController');

const Validate = {
  checkUserNumber(userNumber) {
    const USER_NUMBER_ARRAY = this.getUserNumberArray(userNumber);
    this.isNumber(userNumber);
    this.isRangeNumber(USER_NUMBER_ARRAY);
    this.isUnique(USER_NUMBER_ARRAY);
    BaseballGameController.checkResult(USER_NUMBER_ARRAY);
  },

  getUserNumberArray(userNumber) {
    return userNumber.split('').map((number) => Number(number));
  },

  isNumber(userNumber) {
    if (isNaN(Number(userNumber))) {
      throw new Error(ERROR.NAN);
    }
  },

  isRangeNumber(userNumberArray) {
    userNumberArray.forEach((userNumber) => {
      if (
        !userNumber >= BASEBALL.NUMBER_START ||
        !userNumber <= BASEBALL.NUMBER_END
      ) {
        throw new Error(ERROR.RANGE);
      }
    });
  },

  isUnique(userNumberArray) {
    const USER_NUMBER = userNumberArray.filter(
      (num, idx, arr) => arr.indexOf(num) === arr.lastIndexOf(num)
    );
    if (USER_NUMBER.length !== BASEBALL.NUMBER_LENGTH) {
      throw new Error(ERROR.DUPLICATE);
    }
  },

  checkCommand(command) {
    this.isNumber(command);
    this.isCorrect(command);
    BaseballGameController.checkCommandResult(command);
  },

  isCorrect(command) {
    if (!COMMAND === BASEBALL.RETRY && !COMMAND === BASEBALL.END) {
      throw new Error(ERROR.COMMAND);
    }
  },
};

module.exports = Validate;
