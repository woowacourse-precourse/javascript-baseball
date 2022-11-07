const { ERROR_MESSAGE } = require("./Constant");

class Validation {
  checkAll(inputArray) {
    this.checkNumber(inputArray);
    this.checkLength(inputArray);
    this.checkRepeat(inputArray);
  }

  checkLength(inputArray) {
    if (inputArray.length !== 3) {
      throw ERROR_MESSAGE.INPUT;
    }
  }

  checkNumber(inputArray) {
    if (
      ![1, 2, 3, 4, 5, 6, 7, 8, 9].includes(inputArray[0]) ||
      ![1, 2, 3, 4, 5, 6, 7, 8, 9].includes(inputArray[1]) ||
      ![1, 2, 3, 4, 5, 6, 7, 8, 9].includes(inputArray[2])
    ) {
      throw ERROR_MESSAGE.INPUT;
    }
  }

  checkRepeat(inputArray) {
    if (
      inputArray[0] === inputArray[1] ||
      inputArray[1] === inputArray[2] ||
      inputArray[2] === inputArray[0]
    ) {
      throw ERROR_MESSAGE.INPUT;
    }
  }
}

module.exports = Validation;
