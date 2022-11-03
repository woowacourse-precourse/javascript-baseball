class Exception {
  #regexNum = /[1-9]/g;

  constructor(input) {
    this._input = input;
  }

  isNumber() {
    return (
      !!this._input.match(this.#regexNum) &&
      this._input.match(this.#regexNum).length === this._input.length
    );
  }
}

module.exports = Exception;
