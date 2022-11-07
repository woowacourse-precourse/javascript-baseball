const ErrorMsg = require("./ErrorMsg.js");

class Validation {
  constructor(length) {
    this.length = length; // user input max length
    this.array = [];
  }

  checkValidation(input) {
    if (input.includes("0")) return [false, new Error(ErrorMsg.NoZero)];

    if (Number.isNaN(Number(input))) return [false, new Error(ErrorMsg.NaN)];

    if (input.length !== this.length) {
      return [false, new Error(ErrorMsg.differentDigit)];
    }

    if (new Set(input).size !== this.length)
      return [false, new Error(ErrorMsg.duplicated)];

    if (parseInt(input) < 0) return [false, new Error(ErrorMsg.NonNegative)];

    return [true, ""];
  }
}

module.exports = Validation;
