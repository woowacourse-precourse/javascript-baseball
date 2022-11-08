const isRangeError = (inputs) => inputs.length !== 3;
const isDuplicate = (inputs) => new Set(inputs).size !== inputs.length;
const isDigit = (inputs) => inputs.every((input) => input >= 1 && input <= 9);
const isOneOrTwo = (input) => input === '1' || input === '2';

const validateInputMap = {
  INGAME_VALIDATE: (inputs) => {
    if (isRangeError(inputs)) {
      throw new Error('Input must be length of 3');
    }
    if (isDuplicate(inputs)) {
      throw new Error('Each digit of input must be different');
    }
    if (!isDigit(inputs.map(Number))) {
      throw new Error('Each digit of input should be between 1 and 9');
    }
  },
  OUTGAME_VALIDATE: (input) => {
    if (!isOneOrTwo(input)) {
      throw new Error('input should be 1 or 2');
    }
  },
};

module.exports = validateInputMap;
