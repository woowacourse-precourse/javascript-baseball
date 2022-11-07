const MESSAGE = require("../constant/message");

class UserInput {
  constructor(userInput) {
    this._userInput = userInput;
  }

  checkLength() {
    if (this._userInput.length !== 3) throw new Error(MESSAGE.INVALID_LENGTH);
  }

  checkRange() {
    if (
      !(1 <= Math.min(...this._userInput) && Math.max(...this._userInput) <= 9)
    ) {
      throw new Error(MESSAGE.INVALID_RANGE);
    }
  }

  checkDuplicate() {
    const setLength = new Set(this._userInput).size;
    if (setLength !== 3) {
      throw new Error(MESSAGE.INVALID_DUPLICATE);
    }
  }

  checkAllUserInput() {
    this.checkLength();
    this.checkRange();
    this.checkDuplicate();
  }
}

module.exports = UserInput;
