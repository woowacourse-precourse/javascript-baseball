const { INVALID_INPUT_ERROR } = require('./error.constants');

class InValidInputError extends Error {
  constructor (message = INVALID_INPUT_ERROR.MESSAGE) {
    super(message);
    this.name = INVALID_INPUT_ERROR.TITLE;
  }
}

module.exports = InValidInputError;
