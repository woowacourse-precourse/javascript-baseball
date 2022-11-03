const { GAME_ERROR_MESSAGE, GAME_RULE } = require('./constant');

const isValidateNumbers = (value) => {
  if (!Number(value)) {
    throw new Error(GAME_ERROR_MESSAGE.NOT_VALID_VALUE);
  }
  if (value.includes('0')) {
    throw new Error(GAME_ERROR_MESSAGE.INCLUDE_ZERO);
  }
  if (value.length !== GAME_RULE.NUMBERS_LENGTH) {
    throw new Error(GAME_ERROR_MESSAGE.NOT_VALID_LENGTH);
  }
  if (new Set(value).size !== value.length) {
    throw new Error(GAME_ERROR_MESSAGE.DUPLICATE_NUMBER);
  }
  return true;
};

const isValidateNumber = (value) => {
  if (value !== GAME_RULE.RESTART_NUMBER && value !== GAME_RULE.FINISH_NUMBER) {
    throw new Error(GAME_ERROR_MESSAGE.NOT_VALID_NUMBER);
  }
  return true;
};

exports.isValidateNumbers = isValidateNumbers;
exports.isValidateNumber = isValidateNumber;
