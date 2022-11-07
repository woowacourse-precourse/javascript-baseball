const { Random } = require('@woowacourse/mission-utils');

const { ERROR_MESSAGE, GAME_VALUE } = require('../constants');

const getRandomNumbers = (size, start, end) => {
  let randomNumbers = [];
  while (randomNumbers.length < size) {
    const number = Random.pickNumberInRange(start, end);
    if (randomNumbers.includes(number)) continue;
    randomNumbers.push(number);
  }

  return randomNumbers.join('');
};

const isValidRangeNumber = (userNumbers) => {
  const regex = /^[1-9]{3}$/;
  if (!regex.test(userNumbers)) {
    throw ERROR_MESSAGE.invalidValue;
  }
};

const haveSameNumber = (userNumbers) => {
  if (new Set([...userNumbers]).size < 3) {
    throw ERROR_MESSAGE.duplicate;
  }
};

const getStrikeCount = (userNumbers, computerNumbers) => {
  return [...userNumbers].filter((num, i) => num === computerNumbers[i]).length;
};

const getSameNumCount = (userNumbers, computerNumbers) => {
  return [...userNumbers].filter((num) => computerNumbers.includes(num)).length;
};

const getGameResultMessage = ({ strike, ball }) => {
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

const isValidRestartInputValue = (inputValue) => {
  if (![GAME_VALUE.restart, GAME_VALUE.exit].includes(inputValue)) {
    throw ERROR_MESSAGE.invalidRestartValue;
  }
};

module.exports = {
  isValidRestartInputValue,
  getGameResultMessage,
  getSameNumCount,
  getStrikeCount,
  haveSameNumber,
  isValidRangeNumber,
  getRandomNumbers,
};
