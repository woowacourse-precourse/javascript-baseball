class UserInput {
  constructor(userInput) {
    this._userInput = userInput;
  }

  checkLength() {
    return this._userInput.length === 3;
  }

  checkRange() {
    return (
      1 <= Math.min(...this._userInput) && Math.max(...this._userInput) <= 9
    );
  }

  checkDuplicate() {
    const setLength = new Set(this._userInput).size;
    return setLength === 3;
  }

  checkAllUserInput() {
    return this.checkLength() && this.checkRange() && this.checkDuplicate();
  }
}

module.exports = User;
