class Exception {
  #regexNum = /[1-9]/g;
  #CONSTANT = Object.freeze({
    RESTART: 1,
    EXIT: 2,
    LENGTH: 3,
  });

  constructor(input) {
    this._input = input;
  }

  isNumber() {
    return (
      !!this._input.match(this.#regexNum) &&
      this._input.match(this.#regexNum).length === this._input.length
    );
  }

  is3DifferNumber() {
    return [...new Set(this._input.split(""))].length === this.#CONSTANT.LENGTH;
  }

  isRestart() {
    return this._input == this.#CONSTANT.RESTART;
  }

  isExit() {
    return this._input == this.#CONSTANT.EXIT;
  }
}

module.exports = Exception;
