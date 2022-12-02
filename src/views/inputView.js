const { Console } = require('@woowacourse/mission-utils');
const { GAME_MESSAGES, REGEX } = require('../constants/index.js');
const { validateChoice, validateUserNumber } = require('../validators/index');

const InputView = {
  readUserNumber(callback) {
    Console.readLine(GAME_MESSAGES.GET_USER_NUMBER, (userNumber) => {
      validateUserNumber(userNumber);
      callback(userNumber);
    });
  },

  readUserChoice(callback) {
    Console.readLine(GAME_MESSAGES.ASK_RESTART, (userChoice) => {
      validateChoice(userChoice);
      callback(userChoice);
    });
  },
};

module.exports = InputView;
