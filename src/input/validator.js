const { NUMBER_LENGTH, ERROR_MESSAGE } = require('../constant/constant');

const errorMessage = {
  print(message) {
    return { isValid: false, message };
  },
};

function inputValidator(input) {
  if (input.length !== NUMBER_LENGTH) {
    return errorMessage.print(ERROR_MESSAGE.length);
  }

  if (isNaN(input)) {
    return errorMessage.print(ERROR_MESSAGE.type);
  }

  if (input.includes('0')) {
    return errorMessage.print(ERROR_MESSAGE.range);
  }

  if ([...new Set(input)].length !== NUMBER_LENGTH) {
    return errorMessage.print(ERROR_MESSAGE.duplication);
  }

  return { isValid: true };
}

module.exports = inputValidator;
