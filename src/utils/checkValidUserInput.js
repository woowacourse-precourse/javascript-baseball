// 처리해야할 경우
// 1. 각 자리의 수가 1-9까지의 범위가 아닌 경우
// 2. 각 자리의 수가 중복되는 것이 2개 이상인 경우
// 3. 3자리를 입력하지 않은 경우
// 4. 숫자가 아닌 경우

const isDuplicatedNumber = (userInputNumber) => {
  const newSet = new Set(userInputNumber);
  return newSet.size !== userInputNumber.length;
};

const isNotThreeDigit = (randomNumber) => randomNumber.length !== 3;

const isNotNumber = (randomNumber) => {
  let hasNan = false;
  randomNumber.forEach((x) => {
    if (Number.isNaN(+x)) hasNan = true;
  });
  return hasNan;
};

const isIncludeZero = (userInputNumber) => userInputNumber.includes(0);

const checkValidUserInput = (userInput) => {
  if (isDuplicatedNumber(userInput)) {
    throw new Error('error1');
  }
  if (isNotThreeDigit(userInput)) {
    throw new Error('error2');
  }
  if (isNotNumber(userInput)) {
    throw new Error('error3');
  }
  if (isIncludeZero(userInput)) {
    throw new Error('error4');
  }
};

module.exports = checkValidUserInput;
