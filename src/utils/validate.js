const strToArr = require('./strToArr.js');
const { ERROR_MESSAGE } = require('../constants/message');

function validate(input) {
  if (input.length !== 3) {
    throw ERROR_MESSAGE.INVALID_INPUT_LENGTH;
  }

  const set = new Set(strToArr(input));
  if (input.length !== set.size) {
    throw ERROR_MESSAGE.INVALID_INPUT_DUPLICATED;
  }

  const isNumber = (element) => element >= '1' && element <= '9';
  if (!strToArr(input).every(isNumber)) {
    throw ERROR_MESSAGE.INVALID_INPUT_NAN;
  }

  return true;
}

module.exports = validate;
