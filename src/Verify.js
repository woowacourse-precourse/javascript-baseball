const { MESSAGE } = require('./Const');

class MyError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}

class InputError extends MyError {}

function verify(regExp, input) {
  if (!regExp.test(input)) {
    throw new InputError(MESSAGE.INPUT_ERROR);
  }
}

module.exports = verify;
