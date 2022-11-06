const CONSTANTS = require('../constant');

class NumberBaseball {
  splitNumber(num) {
    return num.split('');
  }

  inputValidCheck(strArray) {
    if (this.inputLengthCheck(strArray)) {
      return true;
    }
    return false;
  }

  inputLengthCheck(strArray) {
    return strArray.length === CONSTANTS.INPUT_LENGTH;
  }

  inputDuplicatedCheck(strArray) {
    return strArray.length === new Set(strArray).length;
  }
}

module.exports = NumberBaseball;
