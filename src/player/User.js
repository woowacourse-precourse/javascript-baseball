const Player = require('./index');
const Validator = require('../Validator');
class User extends Player {
  constructor() {
    super();
    this.validator = Validator;
  }

  /**
   * 이 인스턴스의 number를 반환한다.
   * @return {[number,number,number]|null}
   */
  getNumber() {
    return this.number;
  }

  /**
   * @param {string} string - 문자열숫자
   */
  setNumber(string) {
    if(this.isValidate(string)){
      this.number = this.parseInput(string);
    } else {
      throw new Error('유효하지 않은 입력입니다.');
    }
  }

  parseInput(input) {
    const number = input.split('').map((value) => Number(value));
    return number;
  }

  isValidate(input) {
    return this.validator.isNumber(input)
    && this.validator.isRange(input, 1, 9)
    && this.validator.isUnique(input)
    && this.validator.isLength(input, 3);
  }
}

module.exports = User;
