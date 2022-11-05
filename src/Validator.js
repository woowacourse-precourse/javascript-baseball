const { MAX_LENGTH, BEGIN_NUM } = require('./common/constants');
const {
  INVALID_NUMERIC_ERROR_MESSAGE,
  DUPLICATE_NUMERIC_ERROR_MESSAGE,
  RANGE_ERROR_MESSAGE,
} = require('./common/messages');

class Validator {
  static isNumber(playerInput) {
    const convertNumberPlayerInput = Number(playerInput);
    const isNotNumber = Number.isNaN(convertNumberPlayerInput);

    if (isNotNumber) {
      throw new Error(`${INVALID_NUMERIC_ERROR_MESSAGE}`);
    }

    return true;
  }

  static isValidInputLength(playerInput) {
    const convertStringPlayerInput = String(playerInput);

    if (convertStringPlayerInput.length !== MAX_LENGTH) {
      throw new Error(`${RANGE_ERROR_MESSAGE}`);
    }

    return true;
  }

  static isValidRangeOfNumber(playerInput) {
    const convertStringPlayerInput = String(playerInput);
    const inputNumbers = convertStringPlayerInput.split('');

    inputNumbers.forEach((inputNumber) => {
      if (inputNumber < BEGIN_NUM) {
        throw new Error(`${INVALID_NUMERIC_ERROR_MESSAGE}`);
      }
    });

    return true;
  }

  static isUniqueNumber(playerInput) {
    const convertStringPlayerInput = String(playerInput);
    const differentNumbers = [...new Set(convertStringPlayerInput)];

    if (differentNumbers.length !== MAX_LENGTH) {
      throw new Error(`${DUPLICATE_NUMERIC_ERROR_MESSAGE}`);
    }

    return true;
  }
}

module.exports = Validator;
