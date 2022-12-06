class Validator {
  // eslint-disable-next-line class-methods-use-this
  static isNumber(num) {
    const number = +num;
    if (typeof number !== 'number') throw new Error('숫자가 아닙니다.');
    if (!Number.isInteger(number)) throw new Error('숫자가 아닙니다');
    if (Number.isNaN(number)) throw new Error('숫자가 아니라고요');
  }

  static isDuplicated(numbers) {
    return new Set(numbers).size !== 3;
  }

  static userInput(number) {
    this.isNumber(number);
    if (this.isDuplicated(number)) throw new Error('중복된 글자');
    if (number.length > 3) throw new Error('올바른 자릿수 입력하세요');
    if (number.length < 1) throw new Error('올바른 숫자를 입력하세요');
  }
}

module.exports = Validator;
