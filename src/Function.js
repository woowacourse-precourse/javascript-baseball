const VALID_REGEX = /^[1-9]{3}$/;

class Function {
  static validByRegex(input) {
    return !VALID_REGEX.test(input);
  }

  static validDuplicate(input) {
    const setInputLength = new Set(...input.toString().split('')).size;
    if (input.length !== setInputLength) return false;
    return true;
  }
}

module.exports = Function;
