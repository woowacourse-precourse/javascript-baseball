const { THREE_DIGISTS } = require("./constants");
const { removeListDuplication, throwErrorWrongInputValue } = require("./utils");

class Validation {
  static passAllValidationChecks(playerInputValue) {
    if (
      this.isThreeDigits(playerInputValue) &&
      !this.isIncludesZero(playerInputValue) &&
      !isNaN(playerInputValue) &&
      this.isUniqueNumbers(playerInputValue)
    ) {
      return true;
    } else {
      throwErrorWrongInputValue();
    }
  }

  static isThreeDigits(string) {
    return String(string).length === THREE_DIGISTS;
  }
  static isIncludesZero(string) {
    return String(string).includes("0");
  }
  static isUniqueNumbers(string) {
    const numberList = String(string).split("");
    return removeListDuplication(numberList).length === THREE_DIGISTS;
  }
}

module.exports = Validation;
