const { MESSAGE, REG_EXP } = require('./Const');

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
  if (regExp === REG_EXP.NUMBER) {
    const inputSet = new Set(input);

    if (inputSet.size < 3) {
      throw new InputError(MESSAGE.INPUT_ERROR);
    }
  }
}

module.exports = verify;
