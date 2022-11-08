const { MESSAGE,NUMBER } = require("../constants");

class Error {
  constructor() {}

  static throw(message) {
    throw new Error(message);
  }

}

module.exports = Error;
