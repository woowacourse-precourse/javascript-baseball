const { Random } = require('@woowacourse/mission-utils');
const constants = require('./constants');

const convertToNumberArray = (string) => {
  return string.split('').map(Number);
};

const createResultMessage = (strike, ball) => {
  let resultMessage = '';
  if (strike === 0 && ball === 0) return constants.NOTHING;
  if (ball) resultMessage += `${ball}${constants.BALL} `;
  if (strike) resultMessage += `${strike}${constants.STRIKE}`;
  return resultMessage;
};

const createComputerNumber = () => {
  const computerNumber = new Set();
  while (computerNumber.size < constants.DIGIT) {
    computerNumber.add(Random.pickNumberInRange(1, 9));
  }
  return Array.from(computerNumber);
};

module.exports = { convertToNumberArray, createResultMessage, createComputerNumber };
