const { EXCEPTIONMESSAGE } = require('./ConstMessage');

function checkUserInput(userInput) {
  const userInputArr = userInput.split('');

  const isThreeDigits = userInputArr.length;
  if (isThreeDigits !== 3) throw EXCEPTIONMESSAGE.NOT_THREE_DIGITS_EXCEPTION;

  const isDuplicate = new Set(userInputArr).size;
  if (isDuplicate !== 3) throw EXCEPTIONMESSAGE.DUPLICATE_EXCEPTION;

  const isNotNumber = isNaN(userInputArr.join(''));
  const isIncludesZero = userInputArr.indexOf('0');
  if (isNotNumber || isIncludesZero !== -1) throw EXCEPTIONMESSAGE.NOT_NUMBER_EXCEPTION;

  return true;
}

module.exports = checkUserInput;
