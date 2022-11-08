const { Random } = require('@woowacourse/mission-utils');
const GAME_MESSAGE = require('../constants/constant.js');

const generateRandomNumberArray = () => {
  const randomNumberArray = [];
  while (randomNumberArray.length < GAME_MESSAGE.GAME_NUMBER_LENGTH) {
    const digit = Random.pickNumberInRange(GAME_MESSAGE.MIN_NUMBER, GAME_MESSAGE.MAX_NUMBER);
    if (!randomNumberArray.includes(digit)) randomNumberArray.push(digit);
  }
  return randomNumberArray;
};

module.exports = generateRandomNumberArray;
