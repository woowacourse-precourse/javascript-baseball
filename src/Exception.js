class Exception {
  #regexNum = /[1-9]/g;
  #CONSTANT = Object.freeze({
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
}

module.exports = Exception;
