// 처리해야할 경우
// 1. 각 자리의 수가 1-9까지의 범위가 아닌 경우
// 2. 각 자리의 수가 중복되는 것이 2개 이상인 경우
// 3. 3자리를 입력하지 않은 경우
// 4. 숫자가 아닌 경우
const { ERROR_TEXT } = require('../constant/error');

const isDuplicatedNumber = (userInputNumber) => {
  const newSet = new Set(userInputNumber);
  return newSet.size !== userInputNumber.length;
};

const isNotThreeDigit = (userInputNumber) => userInputNumber.length !== 3;

const isNotNumber = (userInputNumber) => {
  let hasNan = false;
  userInputNumber.forEach((x) => {
    if (Number.isNaN(+x)) hasNan = true;
  });
  return hasNan;
};

const isIncludeZero = (userInputNumber) => userInputNumber.includes(0);

const checkValidUserInput = (userInput) => {
  console.log(userInput);
  if (isDuplicatedNumber(userInput)) {
    throw new Error(ERROR_TEXT.DUPLICATED);
  }
  if (isNotThreeDigit(userInput)) {
    throw new Error(ERROR_TEXT.NOTTHREEDIGIT);
  }
  if (isNotNumber(userInput)) {
    throw new Error(ERROR_TEXT.NOTNUMBER);
  }
  if (isIncludeZero(userInput)) {
    throw new Error(ERROR_TEXT.INCLUDEZERO);
  }
};

module.exports = checkValidUserInput;
