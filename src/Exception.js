const exception = Object.freeze({
  REGEX: /[1-9]/g,
  RESTART: 1,
  EXIT: 2,
  LENGTH: 3,
});

class Exception {
  checkErrorFor(errorInstance) {
    errorInstance.occurError();
  }

  occurError() {
    throw new Error("OVERRIDING ERROR");
  }
}

class BaseBallException {
  #input;
  #errorMessage = "임의의 다른 세 가지 숫자를 해야합니다!!";

  constructor(input) {
    this.#input = input;
  }

  #isNumber() {
    return (
      !!this.#input.match(exception.REGEX) &&
      this.#input.match(exception.REGEX).length === this.#input.length
    );
  }

  #is3DifferNumber() {
    return [...new Set(this.#input.split(""))].length === exception.LENGTH;
  }

  occurError() {
    if (!(this.#isNumber() && this.#is3DifferNumber())) {
      throw new Error(this.#errorMessage);
    }
  }
}

class RestartException {
  #input;
  #errorMessage = "재시작(1), 종료(2)를 눌러야 됩니다!!";

  constructor(input) {
    this.#input = input;
  }

  #isRestart() {
    return this.#input == exception.RESTART;
  }

  #isExit() {
    return this.#input == exception.EXIT;
  }

  occurError() {
    if (!(this.#isRestart() && this.#isExit())) {
      throw new Error(this.#errorMessage);
    }
  }
}

module.exports = {
  Exception,
  BaseBallException,
  RestartException,
};
