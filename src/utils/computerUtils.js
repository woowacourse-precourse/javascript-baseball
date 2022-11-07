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

const isNotNumber = (charCode) => charCode < 49 || charCode > 57;

const getRandomNumber = () => {
  const randomNumbers = [];
  const map = {};

  while (true) {
    const num = Random.pickNumberInRange(COMPUTER.START_NUMBER, COMPUTER.END_NUMBER);

    if (map[num]) continue;

    map[num] = true;
    randomNumbers.push(num);

    if (randomNumbers.length === COMPUTER.ANSWER_LENGTH) break;
  }

  return randomNumbers;
};

const generateHint = (inputNumbers, answers) => {
  const score = {
    strike: 0,
    ball: 0,
  };

  for (let index = 0; index < COMPUTER.ANSWER_LENGTH; index++) {
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

const validateInput = (input) => {
  const map = {};
  const values = input.split('');

  if (values.length !== COMPUTER.ANSWER_LENGTH) throw new Error(COMPUTER.LENGTH_ERROR);

  values.forEach((value) => {
    const charCode = value.charCodeAt();

    if (isNotNumber(charCode)) throw new Error(COMPUTER.CHARACTER_ERROR);
    if (map[value]) throw new Error(COMPUTER.SAME_ERROR);

    map[value] = true;
  });
};

module.exports = {
  getRandomNumber,
  generateHint,
  validateInput,
};
