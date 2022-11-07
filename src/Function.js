const VALID_REGEX = /^[1-9]{3}$/;

class Function {
  static validByRegex(input) {
    return !VALID_REGEX.test(input);
  }
}

module.exports = Function;
