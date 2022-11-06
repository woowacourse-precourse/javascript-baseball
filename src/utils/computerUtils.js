const { Random } = require('@woowacourse/mission-utils');
const COMPUTER = require('../constants/COMPUTER');

const countStrike = (inputNumber, answer) => {
  if (inputNumber === answer) {
    return 1;
  }

  return 0;
};

const countBall = (inputNumber, answers, index) => {
  const findBallCallback = (number, answerIndex) => number === inputNumber && answerIndex !== index;

  if (answers.find(findBallCallback)) {
    return 1;
  }

  return 0;
};

const getRandomNumber = () => {
  return Random.pickUniqueNumbersInRange(
    COMPUTER.START_NUMBER,
    COMPUTER.END_NUMBER,
    COMPUTER.COUNT
  );
};

const generateHint = (inputNumbers, answers) => {
  const score = {
    strike: 0,
    ball: 0,
  };

  for (let index = 0; index < COMPUTER.COUNT; index++) {
    const inputNumber = inputNumbers[index];

    score.strike += countStrike(inputNumber, answers[index]);
    score.ball += countBall(inputNumber, answers, index);
  }

  if (score.strike === 0 && score.ball === 0) {
    return '낫싱';
  }

  if (score.strike === 0) {
    return `${score.ball}볼`;
  }

  if (score.ball === 0) {
    return `${score.strike}스트라이크`;
  }

  return `${score.ball}볼 ${score.strike}스트라이크`;
};

module.exports = {
  getRandomNumber,
  generateHint,
};
