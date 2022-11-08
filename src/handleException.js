const Message = require("./Message");
const INPUT_LENGTH = 3;

function checkInputLength(input) {
  return input.length !== INPUT_LENGTH;
}

function checkIsDigitInRange(input) {
  const regexp = new RegExp("^[1-9]+$");
  return !regexp.test(input);
}

function checkIsDiffEachOther(input) {
  const duplicateNum = new Set(input).size;
  return duplicateNum !== INPUT_LENGTH;
}

function handleGameException(input) {
  if (
    checkInputLength(input) |
    checkIsDigitInRange(input) |
    checkIsDiffEachOther(input)
  ) {
    throw new Error(`${Message.error}`);
  }
}

function checkRestartValid(input) {
  return input !== Message.restartNum && input !== Message.gameoverNum;
}

function handleRestartException(input) {
  if (checkRestartValid(input)) {
    throw new Error(Message.error);
  }
}

module.exports = { handleGameException, handleRestartException };
