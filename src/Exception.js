const { EXCEPTION } = require('./utils/constants');

class Exception {
  checkErrorFor(errorInstance) {
    errorInstance.occurError();
  }

  occurError() {
    throw new Error('OVERRIDING ERROR');
  }
}

class BaseBallException {
  #input;
  #errorMessage = '임의의 다른 세 가지 숫자를 해야합니다!!';

  constructor(input) {
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

class NextException {
  #input;
  #errorMessage = '재시작(1), 종료(2)를 눌러야 됩니다!!';

  constructor(input) {
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

module.exports = {
  Exception,
  BaseBallException,
  NextException,
};
