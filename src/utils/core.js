const { GAME_RULE } = require('./constant');
const { getRandomNumber } = require('./missionUtils');

const getRandomNumbers = (length = GAME_RULE.NUMBERS_LENGTH) => {
  const randomNumbers = [];
  while (randomNumbers.length < length) {
    const number = getRandomNumber();
    if (!randomNumbers.includes(number)) {
      randomNumbers.push(number);
    }
  }
  return randomNumbers.join('');
};

exports.getRandomNumbers = getRandomNumbers;
