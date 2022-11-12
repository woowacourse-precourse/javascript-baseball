const Player = require('./index');
const Validator = require('../Validator');
class User extends Player {
  /**
   * @param {string} string - 문자열숫자
   */
  setNumber (string) {
    if (User.isValidate(string)) {
      this.number = User.parseInput(string);
    } else {
      throw new Error('유효하지 않은 입력입니다.');
    }
  }

  static parseInput (input) {
    const number = input.split('').map((value) => Number(value));
    return number;
  }

  static isValidate (input) {
    return Validator.isNumber(input)
    && Validator.isRange(input, 1, 9)
    && Validator.isUnique(input)
    && Validator.isLength(input, 3);
  }
}

module.exports = User;
