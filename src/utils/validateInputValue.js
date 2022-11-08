const { ANSWER_LENGTH } = require("../constants/constants");

function validateInputValue(userInput) {

  if (isNaN(Number(userInput))) {
    return false;
  }
  if (userInput.length !== ANSWER_LENGTH) {
    return false;
  }
  return true;
}

module.exports = validateInputValue;
