const MissionUtils = require('@woowacourse/mission-utils');
const gameConstant = require('./GameConstant');
const compareNumber = require('./CompareFunctions');

const setAnswer = () => {
  return MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3).join('');
};

const printStartMessage = () => {
  MissionUtils.Console.print(gameConstant.START_MESSAGE);
};

const inputNumber = playerInput => {
  const answer = setAnswer();
  compareNumber(answer, playerInput);
};

const startGame = () => {
  printStartMessage();
  MissionUtils.Console.readLine(gameConstant.INPUT_ORDER_MESSAGE, inputNumber);
};

module.exports = startGame;
