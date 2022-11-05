const { Random } = require('@woowacourse/mission-utils');

const { ERROR_MESSAGE } = require('../constants');

module.exports.isValidRestartInputValue = (inputValue) => {
  if (!['1', '2'].includes(inputValue)) {
    throw ERROR_MESSAGE.invalidRestartValue;
  }
};

module.exports.getGameResultMessage = ({ strike, ball }) => {
  if (strike === 0 && ball === 0) {
    return '낫싱';
  }
  if (strike && ball) {
    return `${ball}볼 ${strike}스트라이크`;
  }
  if (strike) {
    return `${strike}스트라이크`;
  }
  if (ball) {
    return `${ball}볼`;
  }
};

module.exports.getSameNumCount = (userNumbers, computerNumbers) => {
  return [...userNumbers].filter((num) => computerNumbers.includes(num)).length;
};

module.exports.getStrikeCount = (userNumbers, computerNumbers) => {
  return [...userNumbers].filter((num, i) => num === computerNumbers[i]).length;
};

module.exports.haveSameNumber = (userNumbers) => {
  if (new Set([...userNumbers]).size < 3) {
    throw ERROR_MESSAGE.duplicateError;
  }
};

module.exports.isValidRangeNumber = (userNumbers) => {
  const regex = /^[1-9]{3}$/;
  if (!regex.test(userNumbers)) {
    throw ERROR_MESSAGE.invalidValueError;
  }
};

const getNotContainNumber = (randomNumbers, number) => {
  if (randomNumbers.includes(number)) {
    return [];
  }

  return [number];
};

module.exports.getRandomNumbers = (size, start, end) => {
  let randomNumbers = [];
  while (randomNumbers.length < size) {
    const number = Random.pickNumberInRange(start, end);
    const notContainNumber = getNotContainNumber(randomNumbers, number);
    randomNumbers = [...randomNumbers, ...notContainNumber];
  }

  return randomNumbers.join('');
};
