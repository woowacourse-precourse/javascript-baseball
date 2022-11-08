const MissionUtils = require('@woowacourse/mission-utils');
const gameConstant = require('./GameConstant');
const compareNumber = require('./CompareFunctions');
const handleException = require('./HandlingException');

const orderMessage = gameConstant.INPUT_ORDER_MESSAGE;

const removeDuplicate = (number, computer) => {
  if (!computer.includes(number)) {
    computer.push(number);
  }
};

const setAnswer = () => {
  let answer = '';
  const computer = [];
  while (computer.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    removeDuplicate(number, computer);
  }
  answer = computer.join('');
  return answer;
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
