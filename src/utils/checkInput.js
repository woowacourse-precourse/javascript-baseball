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
