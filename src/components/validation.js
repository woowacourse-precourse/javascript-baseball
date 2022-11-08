class Validation {
  constructor() {}

  validateInput(numbers) {
    if (numbers.length !== 3) {
      throw new Error('numbers length must be 3.');
    }

    if (numbers.some(number => !Number.isInteger(number))) {
      throw new Error('number must be integer');
    }

    if (numbers.some(number => number === 0)) {
      throw new Error('number must be between 1 and 9, inclusive.');
    }

    if (numbers.some(number => numbers.indexOf(number) !== numbers.lastIndexOf(number))) {
      throw new Error('numbers does not allow duplication.');
    }
  }
}
module.exports = Validation;
