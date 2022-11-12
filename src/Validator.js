const InValidInputError = require('./error/InValidInputError');
class Validator {
  static isNumber (string) {
    if (/^[0-9]+$/.test(string)) {
      return true;
    }
    throw new InValidInputError(`숫자가 아닙니다.(string: ${string})`);
  }

  static isLength (string, length = 3) {
    if (string.length === length) {
      return true;
    }
    throw new InValidInputError(`제한된 길이를 초과하였습니다. (제한 길이: ${length})`);
  }

  static isRange (string, min, max) {
    if ([...string].every((digit) => Number(digit) >= min && Number(digit) <= max)) {
      return true;
    }
    throw new InValidInputError(`올바른 범위를 벗어났습니다. (제한 범위: ${min}~${max})`);
  }

  static isUnique (string) {
    if (new Set(string).size === string.length) {
      return true;
    }
    throw new InValidInputError(`중복된 값이 있습니다. (string: ${string})`);
  }
}

module.exports = Validator;
