const MissionUtils = require('@woowacourse/mission-utils');
const gameConstant = require('./GameConstant');
const compareNumber = require('./CompareFunctions');

const setAnswer = () => {
  return MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3).join('');
};

const printStartMessage = () => {
  MissionUtils.Console.print(gameConstant.START_MESSAGE);
};

const startGame = () => {
  const answer = setAnswer();
  printStartMessage();
  MissionUtils.Console.readLine(
    gameConstant.INPUT_ORDER_MESSAGE,
    playerInput => {
      compareNumber(answer, playerInput);
    },
  );
};

module.exports = startGame;
