const { ANSWER_LENGTH } = require("../constants/constants");

function validateInputValue(userInput) {
  function hasDuplicateNumber(number) {
    const numberSet = new Set(number.split(""));
    return numberSet.size !== number.length ? true : false;
  }

  function hasZero(number) {
    if (number.includes("0")) {
      return true;
    }
    return false;
  }

  if (isNaN(Number(userInput))) {
    return false;
  }
  if (userInput.length !== ANSWER_LENGTH) {
    return false;
  }
  if (hasDuplicateNumber(userInput)) {
    return false;
  }
  if (hasZero(userInput)) {
    return false;
  }

  return true;
}

module.exports = validateInputValue;
