const { Random } = require('@woowacourse/mission-utils');

function getRandomUniqueNumbers(rangeStart = 1, rangeEnd = 9, length = 3) {
  if (!isNumber(length)) {
    throw new Error('arguments must be numbers.');
  }

  const numbers = [];

  while (numbers.length < length) {
    const number = Random.pickNumberInRange(rangeStart, rangeEnd);

    if (!numbers.includes(number)) {
      numbers.push(number);
    }
  }

  return numbers;
}

function isInRange(number, rangeStart, rangeEnd) {
  if (!isNumber(number) || !isNumber(rangeStart) || !isNumber(rangeEnd)) {
    throw new Error('arguments must be numbers');
  }

  return rangeStart <= number && number <= rangeEnd;
}

function isNumber(value) {
  return typeof value === 'number';
}

exports.getRandomUniqueNumbers = getRandomUniqueNumbers;
exports.isInRange = isInRange;
exports.isNumber = isNumber;
