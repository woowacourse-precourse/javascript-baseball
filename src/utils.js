const { ERROR } = require('./data/constants');

function checkLength(value, length) {
  return value.length === length;
}

function checkDifferentAll(value, length) {
  return [...new Set([...value])].length === length;
}

function checkNumberRange(value) {
  return /^[1-9]*$/g.test(value);
}

function checkException(value, length) {
  if (!checkLength(value, length)) throw ERROR.LENGTH;
  if (!checkDifferentAll(value, length)) throw ERROR.NOTUNIQUE;
  if (!checkNumberRange(value)) throw ERROR.NUMBER_RANGE;
}

module.exports = checkException;
