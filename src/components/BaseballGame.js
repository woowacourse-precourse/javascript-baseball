const MissionUtils = require('@woowacourse/mission-utils');
const gameConstant = require('./GameConstant');
const compareNumber = require('./CompareFunctions');
const handleException = require('./HandlingException');

const orderMessage = gameConstant.INPUT_ORDER_MESSAGE;

const setAnswer = () => {
  return MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3).join('');
};

const printStartMessage = () => {
  MissionUtils.Console.print(gameConstant.START_MESSAGE);
};

const orderInput = answer => {
  MissionUtils.Console.readLine(orderMessage, playerInput => {
    handleException(playerInput, gameConstant.DIGIT);
    compareNumber(answer, playerInput);
  });
};

const startGame = () => {
  const answer = setAnswer();
  printStartMessage();
  orderInput(answer);
};

exports.startGame = startGame;
exports.orderInput = orderInput;
