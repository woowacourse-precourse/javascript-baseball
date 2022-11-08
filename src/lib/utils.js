const { NUMBER_LENGTH, HINTS } = require('./constants');

const makeHintString = ({ numberOfBall, numberOfStrike }) => {
  const hint = [];

  if (numberOfBall) {
    hint.push(HINTS.BALL(numberOfBall));
  }
  if (numberOfStrike) {
    hint.push(HINTS.STRIKE(numberOfStrike));
  }

  return hint.length ? hint.join(' ') : HINTS.NOTHING;
};

const parseInputToNumberArray = input => {
  const trimmedInput = input.trim();
  const numbers = [...trimmedInput].map(Number);

  return numbers;
};

const isValidNumber = numbers => {
  if (numbers.some(number => Number.isNaN(number))) {
    return false;
  }

  if (numbers.length !== NUMBER_LENGTH) {
    return false;
  }

  if (numbers.includes(0)) {
    return false;
  }

  if (new Set(numbers).size !== NUMBER_LENGTH) {
    return false;
  }

  return true;
};

module.exports = {
  makeHintString,
  parseInputToNumberArray,
  isValidNumber,
};
