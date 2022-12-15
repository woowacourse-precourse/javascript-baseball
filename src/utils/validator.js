const { MESSAGE_ERROR } = require('../constants/messages');

const validator = {
  checkTruthy(value) {
    if (!value) {
      throw new Error(MESSAGE_ERROR.INVALID_VALUE);
    }
  },

  checkTypeOfArray(array) {
    if (!Array.isArray(array)) {
      throw new Error(MESSAGE_ERROR.INVALID_VALUE);
    }
  },

  checkArrayLength(array) {
    if (array.length !== 3) {
      throw new Error(MESSAGE_ERROR.INVALID_VALUE);
    }
  },

  checkTypeOfNumber(number) {
    if (typeof number !== 'number') {
      throw new Error(MESSAGE_ERROR.INVALID_VALUE);
    }
  },

  checkNumberRange(number) {
    if (number <= 0 || number >= 10) {
      throw new Error(MESSAGE_ERROR.INVALID_VALUE);
    }
  },

  checkUniqueNumber(numbers) {
    if (
      !numbers.every(
        number => numbers.indexOf(number) === numbers.lastIndexOf(number)
      )
    ) {
      throw new Error(MESSAGE_ERROR.INVALID_VALUE);
    }
  },

  checkSelectNumber(number) {
    if (number !== 1 && number !== 2) {
      throw new Error(MESSAGE_ERROR.INVALID_VALUE);
    }
  },
};

module.exports = validator;
