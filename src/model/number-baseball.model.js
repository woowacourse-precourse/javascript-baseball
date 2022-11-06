const CONSTANTS = require('../constant');

class NumberBaseball {
  splitNumber(num) {
    return num.split('');
  }

  inputValidCheck(strArray) {
    if (
      this.inputLengthCheck(strArray) &&
      this.inputDuplicatedCheck(strArray) &&
      this.inputNumCheck(strArray)
    ) {
      return true;
    }
    return false;
  }

  inputLengthCheck(strArray) {
    return strArray.length === CONSTANTS.INPUT_LENGTH;
  }

  inputDuplicatedCheck(strArray) {
    return strArray.length === new Set(strArray).size;
  }

  inputNumCheck(strArray) {
    return strArray.every((num) => CONSTANTS.NUMBERS.includes(num));
  }
}

module.exports = NumberBaseball;
