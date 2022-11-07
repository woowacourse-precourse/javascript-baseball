const DUPLICATE_EXCEPTION = '중복되는 숫자를 입력하셨습니다.';
const NOT_NUMBER_EXCEPTION = '1부터 9사이의 숫자만 입력할 수 있습니다.';
const NOT_THREE_DIGITS_EXCEPTION = '숫자는 3자리 수로 이루어져야 합니다.';

function checkUserInput(userInput) {
  const userInputArr = userInput.split('');

  const isThreeDigits = userInputArr.length;
  if (isThreeDigits !== 3) throw NOT_THREE_DIGITS_EXCEPTION;
  
  const isDuplicate = new Set(userInputArr).size;
  if (isDuplicate !== 3) throw DUPLICATE_EXCEPTION;

  const isNotNumber = isNaN(userInputArr.join(''));
  const isIncludesZero = userInputArr.indexOf('0');
  if (isNotNumber || isIncludesZero !== -1) throw NOT_NUMBER_EXCEPTION;
  
  return true;
}

module.exports = checkUserInput;