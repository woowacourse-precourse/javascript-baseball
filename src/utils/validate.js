const { rule } = require('../constants');

const isIncludeCharacter = (numbers) => numbers.find((number) => isNaN(parseInt(number, 10)));
const isDuplicate = (numbers) => numbers.length !== new Set(numbers).size;
const isInvalidLength = (numbers) => numbers.length !== rule.LENGTH;
const isIncludeZero = (numbers) => numbers.includes('0');

const isValidUserNumbers = (numbers) => {
  if (
    isIncludeCharacter(numbers) ||
    isDuplicate(numbers) ||
    isInvalidLength(numbers) ||
    isIncludeZero(numbers)
  ) {
    return false;
  }

  return true;
};

module.exports = isValidUserNumbers;
