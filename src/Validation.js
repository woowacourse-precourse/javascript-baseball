const { THREE, ERROR_TEXT } = require('./Constant');
class Validation {
  static userNumberIsValid(input) {
    const repeatInput = [...new Set(input)];
    if (
      input < 0 ||
      input.includes(0) ||
      isNaN(input) ||
      String(input).length !== THREE ||
      repeatInput.length !== THREE
    ) {
      throw new Error(ERROR_TEXT);
    } else return input;
  }
}

module.exports = Validation;
