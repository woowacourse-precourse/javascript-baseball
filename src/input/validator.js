const { NUMBER_LENGTH, ERROR_MESSAGE } = require('../constant/constant');

class Validator {
  static checkValidation(input) {
    this.hasValidLength(input);
    this.hasValidType(input);
    this.hasValidRange(input);
    this.hasNoneDuplicateNumbers(input);
  }

  static hasValidLength(input) {
    if (input.length !== NUMBER_LENGTH) {
      throw ERROR_MESSAGE.length;
    }
  }

  static hasValidType(input) {
    if (isNaN(Number(input))) {
      throw ERROR_MESSAGE.type;
    }
  }

  static hasValidRange(input) {
    if (input.includes('0')) {
      throw ERROR_MESSAGE.range;
    }
  }

  static hasNoneDuplicateNumbers(input) {
    if ([...new Set(input)].length !== NUMBER_LENGTH) {
      throw ERROR_MESSAGE.duplication;
    }
  }
}

module.exports = Validator;
