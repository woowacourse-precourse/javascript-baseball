const { MESSAGE,NUMBER } = require("../constants");

class Error {
  constructor() {}

  static throw(message) {
    throw new Error(message);
  }

  static isDuplicated(string, element) {
    return string.indexOf(element) !== string.lastIndexOf(element);
  }

}

module.exports = Error;
