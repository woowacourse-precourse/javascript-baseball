const constants = require('./constants');

class User {
  constructor() {
    this.number = [];
  }

  setUserNumber(number) {
    this.number = number.split("");
    this.numbersValidation(this.number);
  }

  numbersValidation(numbers) {
    if (numbers.length <= 3) this.rangeErrorValidation(numbers);
    else {
      throw constants.NUMERIC_VALID_ERROR;
    }
  }

  rangeErrorValidation(numbers) {
    numbers.reduce((acc, cur) => {
      if (!acc.includes(cur) && cur >= 1 && cur <= 9) {
        acc.push(cur);
        return acc;
      }
      throw constants.NUMERIC_VALID_ERROR;
    }, []);
  }
}

module.exports = User;
