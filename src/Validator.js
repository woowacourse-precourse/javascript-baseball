const { ANSWER, MESSAGE } = require('./constants/constants');

class Validator {
  static validateInput(userInput) {
    const checkLength = userInput.length === ANSWER.LENGTH;
    const checkNumber = Boolean(userInput.match(/^[1-9]+$/));
    const checkDuplicate = new Set([...userInput]).size === ANSWER.LENGTH;
    if (!checkLength) {
      throw new Error(MESSAGE.ERROR_Length);
    } else if (!checkNumber) {
      throw new Error(MESSAGE.ERROR_Number);
    } else if (!checkDuplicate) {
      throw new Error(MESSAGE.ERROR_Duplicate);
    }
  }
}

module.exports = Validator;
