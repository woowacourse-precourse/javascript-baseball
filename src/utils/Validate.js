const { ERROR_HEADER, ERROR } = require("../constant/Error");
const { VALUE } = require("../constant/Value");

const Validate = {
  checkUserInput(number) {
    this.isNumber(number);
    this.isLengthValid(number);
    this.isIncludesZero(number);
    this.isDuplicated(number);
  },

  isNumber(number) {
    number.forEach((element) => {
      if (isNaN(element)) {
        this.throwError(ERROR.number.notANumber);
      }
    });
  },

  isLengthValid(number) {
    if (number.length != 3) {
      this.throwError(ERROR.number.invalidLength);
    }
  },

  isIncludesZero(number) {
    if (number.includes("0")) this.throwError(ERROR.number.includesZero);
  },

  isDuplicated(number) {
    let removeDuplication = new Set(number);
    removeDuplication = [...removeDuplication];
    if (removeDuplication.length != 3) {
      this.throwError(ERROR.number.duplicated);
    }
  },

  checkCommand(command) {
    if (command !== VALUE.command.restart && command !== VALUE.command.finish) {
      this.throwError(ERROR.command.invalidCommand);
    }
  },

  throwError(error) {
    throw new Error(ERROR_HEADER + error);
  },
};

module.exports = Validate;
