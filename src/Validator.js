class Validator {
  constructor() {
    this.USER_INPUT_REGEX = /[^1-9]/g;
  }

  isError(userInput) {
    if (userInput.length !== 3) {
      return true;
    }

    if (new Set(userInput.split('')).size !== 3) {
      return true;
    }

    if (this.USER_INPUT_REGEX.test(userInput)) {
      return true;
    }

    return false;
  }
}

module.exports = Validator;
