// 난수의 조건
// 2-1. 1-9까지의 범위이다.
// 2-2. 서로 중복되지 않는다.
// 2-3. 3자리이다.
// 2-4. 숫자이다.

const isDuplicatedNumber = (userInputNumber) => {
  const newSet = new Set(userInputNumber);
  return newSet.size !== userInputNumber.length;
};

const isNotThreeDigit = (userInputNumber) => userInputNumber.length !== 3;

const isNotNumber = (userInputNumber) => {
  let hasNan = false;
  userInputNumber.split('').forEach((x) => {
    if (Number.isNaN(+x)) hasNan = true;
  });
  return hasNan;
};

const checkInvalidRandomNumber = (input) => {
  const userInputNumber = input.join('');
  let isInValid = false;
  if (isDuplicatedNumber(userInputNumber)) {
    isInValid = true;
  }
  if (isNotThreeDigit(userInputNumber)) {
    isInValid = true;
  }
  if (isNotNumber(userInputNumber)) {
    isInValid = true;
  }
  return isInValid;
};

module.exports = checkInvalidRandomNumber;
