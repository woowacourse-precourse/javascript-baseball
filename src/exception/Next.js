const Exception = require('./index.js');

const { EXCEPTION } = require('../utils/constants');

class NextException extends Exception {
  #input;
  #errorMessage = '재시작(1), 종료(2)를 눌러야 됩니다!!';

  constructor(input) {
    super();

    this.#input = input;
  }

  #isRestart() {
    return this.#input == EXCEPTION.RESTART;
  }

  #isExit() {
    return this.#input == EXCEPTION.EXIT;
  }

  occurError() {
    if (!(this.#isRestart() || this.#isExit())) {
      throw new Error(this.#errorMessage);
    }
  }
}
module.exports = NextException;
