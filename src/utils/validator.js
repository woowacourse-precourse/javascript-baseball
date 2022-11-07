const { ERROR_MESSAGE, NUMBER } = require('../constants');

function isNumInRange(str) {
  const regExp = /[1-9]/g;
  const matchArr = str.match(regExp);
  return matchArr.length === str.length;
}

function isLengthEqualsThree(str) {
  return str.length === NUMBER.NUMBER_LENGTH;
}

function isAllDifferent(str) {
  const inputNumSet = new Set(str.split(''));
  return inputNumSet.size === str.length;
}

function isInputValidate(str) {
  if (!isLengthEqualsThree(str)) {
    return ERROR_MESSAGE.LENGTH_ERROR;
  }
  if (!isAllDifferent(str)) {
    return ERROR_MESSAGE.DIFFERENT_DIGITS_ERROR;
  }
  if (!isNumInRange(str)) {
    return ERROR_MESSAGE.NUM_IN_RANGE_ERROR;
  }

  return true;
}

module.exports = isInputValidate;
