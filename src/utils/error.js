const { MESSAGE,NUMBER } = require("../constants");

class Error {
  constructor() {}

  static throw(message) {
    throw new Error(message);
  }

  static isDuplicated(string, element) {
    return string.indexOf(element) !== string.lastIndexOf(element);
  }

  static validate(input) {
    let string = input;
    if (Array.isArray(input)) string = input.join("");

    const regex = new RegExp(
      `^[${NUMBER.START}-${NUMBER.END}]{${NUMBER.TOTAL}}$`
    );

    const match = regex.test(string);

    if (!match) Error.throw(MESSAGE.ERROR);

    string.split("").forEach((element) => {
      if (this.isDuplicated(input, element)) Error.throw(MESSAGE.ERROR);
    });
  }
}

module.exports = Error;
