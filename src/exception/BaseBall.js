const Exception = require('./index.js');

const { EXCEPTION } = require('../utils/constants');

class BaseBallException extends Exception {
  #input;
  #errorMessage = '임의의 다른 세 가지 숫자를 해야합니다!!';

  constructor(input) {
    super();

    this.#input = input;
  }

  #isNumber() {
    return (
      !!this.#input.match(EXCEPTION.REGEX) &&
      this.#input.match(EXCEPTION.REGEX).length === this.#input.length
    );
  }

  #is3DifferNumber() {
    return [...new Set(this.#input.split(''))].length === EXCEPTION.LENGTH;
  }

  occurError() {
    if (!(this.#isNumber() && this.#is3DifferNumber())) {
      throw new Error(this.#errorMessage);
    }
  }
}

module.exports = BaseBallException;
