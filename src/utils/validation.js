const { ERROR_MESSAGE } = require('../constant');

function guessAnswerValidate(answer) {
  const duplicate = new Set(answer);
  if (answer.length !== 3) {
    throw ERROR_MESSAGE.DIFFERENT_NUMBERS;
  }
  if (answer.length !== duplicate.size) {
    throw ERROR_MESSAGE.DIFFERENT_NUMBERS;
  }
  if (!answer.split('').every((number) => number.charCodeAt() >= 49 && number.charCodeAt() <= 57)) {
    throw ERROR_MESSAGE.OUT_OF_RANGE;
  }
}

function restartEndGameAnswerValidator(answer) {
  if (answer.length !== 1) {
    throw ERROR_MESSAGE.ONLY_NUMBER;
  }
  if (!(answer.charCodeAt() >= 49 && answer.charCodeAt() <= 50)) {
    throw ERROR_MESSAGE.OUT_OF_RANGE;
  }
}

module.exports = { guessAnswerValidate, restartEndGameAnswerValidator };
