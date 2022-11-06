const { ERROR, REG_EXP } = require('./Constant');

class Validate {
  static isVaildate(input) {
    if (!this.isRegExp(input) || this.isDuplicate(input)) {
      throw new Error(ERROR.INPUT_VALID);
    }
  }

  static isRegExp(input) {
    const regExp = new RegExp(REG_EXP);
    return regExp.test(input);
  }

  static isDuplicate(input) {
    const inputSet = new Set([...input]);
    return inputSet.size !== input.length;
  }
}

module.exports = Validate;
