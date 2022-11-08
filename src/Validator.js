const {
  RANDOM_NUMBER,
  EXECPTION_CONDITION,
  ERROR_MESSAGE,
} = require("../constant/constant");

class Validator {
  constructor() {
    this.input = null;
  }

  #throwTypeError() {
    throw new TypeError(ERROR_MESSAGE.TYPE_ERROR);
  }

  #isValidLength() {
    return this.input.length === RANDOM_NUMBER.MAX_SIZE;
  }

  #isAllNumber() {
    const regex = /[1-9]{3}/g;
    const isNumber = regex.test(this.input);

    return isNumber;
  }

  isGameNumberInput(input) {
    this.input = input;

    if (!this.#isAllNumber() || !this.#isValidLength())
      return this.#throwTypeError();

    return true;
  }

  #isValidGameEndInput() {
    return (
      this.input === EXECPTION_CONDITION.RESTART ||
      this.input === EXECPTION_CONDITION.END
    );
  }

  isResetOrAndInput(input) {
    this.input = input;

    if (this.#isValidGameEndInput() === false) return this.#throwTypeError();
  }
}

module.exports = Validator;
