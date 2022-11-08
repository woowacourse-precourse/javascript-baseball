const { Console } = require('@woowacourse/mission-utils');
const { MESSAGES, ERRORS, OPTION } = require('../constants');

choiceRestartAndEnd = () => {
  Console.readLine(MESSAGES.INPUT_OPTION, (num) => {
    isValidUserAnswer(num);
  });
};

isValidUserAnswer = (answer) => {
  if (answer === OPTION.RESTART) {
    return playBaseballGame();
  }
  if (answer === OPTION.END) {
    Console.print(MESSAGES.END);
    Console.close();
  }
  if (answer !== OPTION.RESTART && answer !== OPTION.END) {
    throw new Error(ERRORS.OPTION);
  }
};

module.exports.choiceRestartAndEnd = choiceRestartAndEnd;
