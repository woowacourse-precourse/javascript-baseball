const Message = require("./Message");

function checkInputLength(input) {
  return input.length !== 3;
}

function checkIsDigitInRange(input) {
  const regexp = new RegExp("^[1-9]+$");
  return !regexp.test(input);
}

function checkException(input) {
  if (checkInputLength(input) | checkIsDigitInRange(input)) {
    throw new Error(`${Message.error}`);
  }
}

module.exports = checkException;
