const Message = require("./Message");

function checkInputLength(input) {
  return input.length !== 3;
}

function checkIsDigitInRange(input) {
  const regexp = new RegExp("^[1-9]+$");
  return !regexp.test(input);
}

function checkIsDiffEachOther(input) {
  const duplicateNum = new Set(input).size;
  return duplicateNum !== 3;
}

function checkException(input) {
  if (
    checkInputLength(input) |
    checkIsDigitInRange(input) |
    checkIsDiffEachOther(input)
  ) {
    throw new Error(`${Message.error}`);
  }
}

module.exports = checkException;
