const { NUMBERS_RULES, EXCEPTION } = require('./static/constants');
const Exception = require('./Exception');

class Player {
  getNumbers() {
    return this.numbers;
  }

  setNumbers(value) {
    const numbers = [...value];
    Player.validateNumbers(numbers);
    this.numbers = numbers;
    return this;
  }

  static validateNumbers(numbers) {
    if (Player.hasNotNumber(numbers)) {
      throw new Exception(EXCEPTION.notNumbers);
    }
    if (!Player.isValidLength(numbers)) {
      throw new Exception(EXCEPTION.invalidLength);
    }
    if (Player.isIncludeZero(numbers)) {
      throw new Exception(EXCEPTION.includeZero);
    }
    if (Player.hasDuplicated(numbers)) {
      throw new Exception(EXCEPTION.duplicated);
    }
  }

  static isNotNumber(value) {
    return Number.isNaN(parseInt(value, 10));
  }

  static hasNotNumber(numbers) {
    return numbers.some(this.isNotNumber.bind(this));
  }

  static isValidLength(numbers) {
    return numbers.length === NUMBERS_RULES.digit;
  }

  static isIncludeZero(numbers) {
    return numbers.map(Number).includes(0);
  }

  static hasDuplicated(numbers) {
    return numbers.length !== new Set(numbers).size;
  }
}

module.exports = Player;
