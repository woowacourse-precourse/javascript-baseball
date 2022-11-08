const { ERROR_MESSAGE } = require("../constants/messages");

class InputError {
  validateInputExist(input) {
    if (!input) {
      throw ERROR_MESSAGE.INPUT_EXIST_ERROR;
    }
  }
  validateInputLength(input) {
    if (input && input.length !== 3) {
      throw ERROR_MESSAGE.INPUT_LENGTH_ERROR;
    }
  }

  validateInputType(input) {
    if (input && isNaN(Number(input))) {
      throw ERROR_MESSAGE.INPUT_TYPE_ERROR;
    }
  }

  validateIsPositiveInteger(input) {
    if (input && Number(input) < 0) {
      throw ERROR_MESSAGE.INPUT_ISPOSITIVE_NUM_ERROR;
    }
  }

  validateNumRepeat(input) {
    const existNum = new Set();
    for (let i = 0; i < input.length; i++) {
      if (existNum.has(input[i])) {
        throw ERROR_MESSAGE.RETRY_INPUT_ERROR;
      }
      existNum.add(input[i]);
    }
  }

  validateRetryInput(input) {
    const possibleValue = ["1", "2"];
    if (!possibleValue.includes(input)) {
      throw "1혹은 2를 입력해주세요.";
    }
  }

  validateUserInput(input) {
    this.validateInputExist(input);
    this.validateInputLength(input);
    this.validateInputType(input);
    this.validateIsPositiveInteger(input);
    this.validateNumRepeat(input);
  }
}

module.exports = InputError;
