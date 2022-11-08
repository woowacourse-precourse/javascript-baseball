const { ERROR, REG_EXP } = require('./Constant');

// 유저가 받은 Input값이 타당한지 체크하는 클래스
class Validate {
  static isVaildate(input) {
    if (!this.isRegExp(input) || this.isDuplicate(input)) {
      throw new Error(ERROR.INPUT_VALID);
    }
  }

  // Input이 정규식에 맞는지 체크하는 함수
  static isRegExp(input) {
    const regExp = new RegExp(REG_EXP);
    return regExp.test(input);
  }

  // Input이 중복된 숫자로 이루워져있는지 체크하는 함수
  static isDuplicate(input) {
    const inputSet = new Set([...input]);
    return inputSet.size !== input.length;
  }
}

module.exports = Validate;
