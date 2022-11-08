// 난수의 조건
// 2-1. 1-9까지의 범위이다.
// 2-2. 서로 중복되지 않는다.
// 2-3. 3자리이다.
// 2-4. 숫자이다.

const isDuplicatedNumber = (randomNumber) => {
  const newSet = new Set(randomNumber);
  return newSet.size !== randomNumber.length;
};

const isNotThreeDigit = (randomNumber) => randomNumber.length !== 3;

const isNotNumber = (randomNumber) => {
  let hasNan = false;
  randomNumber.split('').forEach((x) => {
    if (Number.isNaN(+x)) hasNan = true;
  });
  return hasNan;
};

const checkInvalidRandomNumber = (input) => {
  const randomNumber = input.join('');
  let isInValid = false;
  if (isDuplicatedNumber(randomNumber)) {
    isInValid = true;
  }
  if (isNotThreeDigit(randomNumber)) {
    isInValid = true;
  }
  if (isNotNumber(randomNumber)) {
    isInValid = true;
  }
  return isInValid;
};

module.exports = checkInvalidRandomNumber;
