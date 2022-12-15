const { Console } = require('@woowacourse/mission-utils');
const { GAME_MESSAGE } = require('../constants');

const InputView = {
  input(message, callback) {
    Console.readLine(message, callback);
  },

  inputCarNameList(callback) {
    this.input(GAME_MESSAGE.input_car_name, callback);
  },

  inputTrailCnt(callback) {
    this.input(GAME_MESSAGE.input_game_trial, callback);
  },
};

module.exports = InputView;
