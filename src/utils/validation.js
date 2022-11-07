const { Console } = require('@woowacourse/mission-utils');
const constants = require('./constants');

const isNumber = (input) => {
  const isNaNArray = input.map((digit) => isNaN(digit));
  if (isNaNArray.includes(true)) return false;
  return true;
};

const isThreeDigit = (input) => {
  if (input.length === constants.DIGIT) return true;
  return false;
};

const isInRange = (input) => {
  if (input.includes(0)) return false;
  return true;
};

const isDifferent = (input) => {
  const set = new Set();
  input.map((digit) => set.add(digit));
  if (set.size === constants.DIGIT) return true;
  return false;
};

const throwError = (message) => {
  Console.close();
  throw new Error(message);
};

const validate = (input) => {
  if (!isNumber(input)) {
    throwError(constants.TYPE_ERROR);
  }
  if (!isThreeDigit(input)) {
    throwError(constants.DIGIT_ERROR);
  }
  if (!isInRange(input)) {
    throwError(constants.RANGE_ERROR);
  }
  if (!isDifferent(input)) {
    throwError(constants.DUPLICATE_ERROR);
  }
};

module.exports = { isNumber, isThreeDigit, isInRange, isDifferent, validate };
