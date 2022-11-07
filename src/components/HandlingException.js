const handleException = (inputArray, digit) => {
  if (isException(inputArray, digit)) {
    const ERROR_MESSAGE = '잘못된 입력입니다. 게임을 종료합니다.';
    throw ERROR_MESSAGE;
  }
};

const isException = (inputArray, digit) => {
  if (checkDuplicate(inputArray, digit)) return true;
  if (checkValidNumber(inputArray)) return true;
  if (checkDigit(inputArray, digit)) return true;
};

const checkDuplicate = (inputArray, digit) => {
  return [...new Set(inputArray)].length !== digit;
};

const checkValidNumber = inputArray => {
  const inputString = inputArray.join('');
  const regExp = /[^1-9]/;
  return regExp.test(inputString);
};

const checkDigit = (inputArray, digit) => {
  return inputArray.length !== digit;
};

module.exports = handleException;
