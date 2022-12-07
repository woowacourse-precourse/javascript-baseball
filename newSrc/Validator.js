const { Error } = require('./Constant');

class Validator {
  // eslint-disable-next-line class-methods-use-this
  static isNumber(num) {
    const number = +num;
    if (typeof number !== 'number') throw new Error(Error.NOT_NUMBER);
    if (!Number.isInteger(number)) throw new Error(Error.NOT_NUMBER);
    if (Number.isNaN(number)) throw new Error(Error.NOT_NUMBER);
  }

  static isDuplicated(numbers) {
    return new Set(numbers).size !== 3;
  }

  static userInput(number) {
    this.isNumber(number);
    if (this.isDuplicated(number)) throw new Error(Error.DUPLICATED);
    if (number.length > 3) throw new Error(Error.NO_RIGTH_NUBER);
    if (number.length < 1) throw new Error(Error.NO_RIGTH_NUBER);
  }
}

module.exports = Validator;
