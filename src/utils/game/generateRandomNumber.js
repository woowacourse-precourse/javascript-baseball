const { Random } = require('@woowacourse/mission-utils');
const GAME_MESSAGE = require('../constants/constant.js');

const checkDuplicateNumbers = (digit, randomNumberArray) => {
  const copyArray = [...randomNumberArray];
  if (!copyArray.includes(digit)) {
    copyArray.push(digit);
  }
  return copyArray;
};

const generateRandomNumberArray = () => {
  let randomNumberArray = [];
  while (randomNumberArray.length < GAME_MESSAGE.GAME_NUMBER_LENGTH) {
    const digit = Random.pickNumberInRange(GAME_MESSAGE.MIN_NUMBER, GAME_MESSAGE.MAX_NUMBER);
    randomNumberArray = checkDuplicateNumbers(digit, randomNumberArray);
  }
  return randomNumberArray;
};

module.exports = generateRandomNumberArray;
