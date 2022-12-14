const { Console } = require('@woowacourse/mission-utils');
const { GAME_MESSAGE } = require('../constants');

const InputView = {
  input(message, callback) {
    Console.readLine(message, callback);
  },

  inputUserCommand(callback) {
    this.input(GAME_MESSAGE.input_number, callback);
  },

  askUserToRestart(callback) {
    this.input(GAME_MESSAGE.ask_to_restart, callback);
  },
};

module.exports = InputView;
