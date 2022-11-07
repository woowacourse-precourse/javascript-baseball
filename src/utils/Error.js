class InputError {
  validateInputExist(input) {
    if (!input) {
      throw "값을 입력해주세요.";
    }
  }
  validateInputLength(input) {
    if (input && input.length !== 3) {
      throw "3자리 숫자를 입력해주세요.";
    }
  }

  validateInputType(input) {
    if (input && isNaN(Number(input))) {
      throw "숫자를 입력해주세요.";
    }
  }

  validateIsPositiveInteger(input) {
    if (input && Number(input) < 0) {
      throw "0보다 큰 숫자를 입력해주세요.";
    }
  }

  validateNumRepeat(input) {
    const existNum = new Set();
    for (let i = 0; i < input.length; i++) {
      if (existNum.has(input[i])) {
        throw "서로 다른 숫자를 입력해주세요.";
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
