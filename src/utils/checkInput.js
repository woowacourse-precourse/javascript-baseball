const { RESTART_INPUT, ERROR } = require("../constants/constants");

function checkLength(input, length) {
  return input.length === length;
}

function checkRange(input, min, max) {
  const inputArray = [...input];
  return inputArray.every((number) => number >= min && number <= max);
}

function checkDuplicate(input) {
  const inputArray = [...input];
  return new Set(inputArray).size === inputArray.length;
}

function checkGuessInput(input) {
  if (!checkLength(input, 3)) throw new Error(ERROR.INVALID_LENGTH);
  if (!checkRange(input, 1, 9)) throw new Error(ERROR.INVALID_RANGE);
  if (!checkDuplicate(input)) throw new Error(ERROR.INVALID_DUPLICATE);
}

module.exports = {
  checkGuessInput,
};
