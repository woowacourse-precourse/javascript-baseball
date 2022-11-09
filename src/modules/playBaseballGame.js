const { Console } = require('@woowacourse/mission-utils');
const { NUMBER, SCORES, MESSAGES } = require('../constants');
const { getComputerNumber } = require('./getComputerNumber');
const { isValidUserNumber } = require('./isValidUserNumber');
const { choiceRestartAndEnd } = require('./choiceRestartAndEnd');

const playBaseballGame = () => {
  const computer = getComputerNumber();
  getUserNumbers(computer);
};

const getUserNumbers = (computer) => {
  Console.readLine(MESSAGES.INPUT_NUMBER, (num) => {
    isValidUserNumber(num);
    checkGameScore(computer, num);
  });
};

const checkGameScore = (computer, user) => {
  const gameScore = calculateGameScore(computer, user);
  const gameResult = printGameScore(gameScore, computer);
  return checkThreeStrike(gameResult, computer);
};

const calculateGameScore = (computer, user) => {
  let ball = 0;
  let strike = 0;
  const overlappingNumbers = [...computer].filter((number) => [...user].includes(number));

  overlappingNumbers.forEach((number) => {
    ball++;

    if (computer.indexOf(number) === user.indexOf(number)) {
      ball--;
      strike++;
    }
  });
  return { ball, strike };
};

const printGameScore = ({ ball, strike }) => {
  let result = [];
  if (ball > 0) {
    result.push(`${ball}${SCORES.BALL}`);
  }
  if (strike > 0) {
    result.push(`${strike}${SCORES.STRIKE}`);
  }
  if (result.length === 0) {
    result.push(SCORES.NOTHING);
  }
  result = result.join(' ');

  Console.print(result);
  return result;
};

// eslint-disable-next-line consistent-return
const checkThreeStrike = (answer, computer) => {
  if (answer.includes(`${NUMBER.LENGTH}${SCORES.STRIKE}`)) {
    Console.print(MESSAGES.SUCCESS);
    return choiceRestartAndEnd();
  }

  getUserNumbers(computer);
};

module.exports = { playBaseballGame };
