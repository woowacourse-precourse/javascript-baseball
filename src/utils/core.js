const { GAME_RULE, GAME_MESSAGE } = require('./constant');
const { getRandomNumber } = require('./missionUtils');

const getRandomNumbers = () => {
  const randomNumbers = [];
  while (randomNumbers.length < GAME_RULE.NUMBERS_LENGTH) {
    const number = getRandomNumber();
    if (!randomNumbers.includes(number)) {
      randomNumbers.push(number);
    }
  }
  return randomNumbers.join('');
};

const getStrike = (computerValue, userValue) => {
  let strike = 0;
  for (let index = 0; index < GAME_RULE.NUMBERS_LENGTH; index += 1) {
    if (computerValue[index] === userValue[index]) {
      strike += 1;
    }
  }
  return strike ? `${strike}${GAME_MESSAGE.STRIKE}` : '';
};

const getBall = (computerValue, userValue) => {
  const strike = getStrike(computerValue, userValue);
  let ball = 0;
  for (let index = 0; index < GAME_RULE.NUMBERS_LENGTH; index += 1) {
    if (computerValue.includes(userValue[index])) {
      ball += 1;
    }
  }
  if (strike) {
    ball -= Number(strike.slice(0, 1));
  }
  return ball ? `${ball}${GAME_MESSAGE.BALL}` : '';
};

exports.getRandomNumbers = getRandomNumbers;
exports.getStrike = getStrike;
exports.getBall = getBall;
