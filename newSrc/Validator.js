class Validator {
  // eslint-disable-next-line class-methods-use-this
  isNumber(num) {
    if (typeof num !== 'number') throw new Error('숫자가 아닙니다.');
    if (!Number.isInteger(num)) throw new Error('숫자가 아닙니다');
    if (Number.isNaN(num)) throw new Error('숫자가 아니라고요');
  }
}

module.exports = Validator;
