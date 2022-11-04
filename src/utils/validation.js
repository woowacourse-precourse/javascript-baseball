const { Console } = require('@woowacourse/mission-utils');

const isNumber = (input) => {
  const isNaNArray = input.map((digit) => isNaN(digit));
  if (isNaNArray.includes(true)) return false;
  return true;
};

const isThreeDigit = (input) => {
  if (input.length === 3) return true;
  return false;
};

const isInRange = (input) => {
  if (input.includes(0)) return false;
  return true;
};

const isDifferent = (input) => {
  const set = new Set();
  input.map((digit) => set.add(digit));
  if (set.size === 3) return true;
  return false;
};

const throwError = (message) => {
  Console.close();
  throw new Error(message);
};

const validate = (input) => {
  if (!isNumber(input)) {
    throwError('숫자를 입력하세요.');
  }
  if (!isThreeDigit(input)) {
    throwError('세 자리 숫자를 입력하세요.');
  }
  if (!isInRange(input)) {
    throwError('1~9 사이의 숫자를 입력하세요.');
  }
  if (!isDifferent(input)) {
    throwError('서로 다른 세 숫자를 입력하세요.');
  }
};

module.exports = { validate };
