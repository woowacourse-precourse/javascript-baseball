const { MESSAGE, STATE, NUMBER } = require('./Const');

class MyError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}

class InputError extends MyError {}

class Verify {
  userInput(input) {
    const inputSet = new Set(input);

    if (
      inputSet.size !== input.length
      || inputSet.size > NUMBER.COUNT
      || inputSet.has(NaN)
      || inputSet.has(0)
    ) {
      throw new InputError(MESSAGE.INPUT_ERROR);
    }
  }

  state(state) {
    if (state !== STATE.RESTART && state !== STATE.EXIT) {
      throw new InputError(MESSAGE.INPUT_ERROR);
    }
  }
}

module.exports = Verify;
