const { ERROR } = require('./Constants');
class InputValidation {
  //숫자인가?
  isNumber(input) {
    const regex = /^[0-9]+$/;
    if (!regex.test(input)) {
      return false;
    }
    return true;
  }

  //세자리인가?
  isThreeDigits(input) {
    if (input.length !== 3) {
      return false;
    }
    return true;
  }

  //각각의 숫자가 다른 숫자인가?
  isUniqueDigits(input) {
    let inputArr = input.toString().split('');
    if (new Set(inputArr).size !== 3) {
      return false;
    }
    return true;
  }

  isValidInput(input) {
    if (this.isNumber(input) === false) {
      throw Error(ERROR.ONLY_NUMBER + ERROR.ERROR_ENDING);
    }
    if (this.isThreeDigits(input) === false) {
      throw Error(ERROR.LENGTH_IS_THREE + ERROR.ERROR_ENDING);
    }
    if (this.isUniqueDigits(input) === false) {
      throw Error(ERROR.NOT_UNIQUE + ERROR.ERROR_ENDING);
    }
    return true;
  }

  isValidRestartInput(input) {
    if (input !== '1' && input !== '2') {
      throw Error(ERROR.ONLY_ONE_OR_TWO + ERROR.ERROR_ENDING);
    }
    return true;
  }
}

module.exports = InputValidation;
