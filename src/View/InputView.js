const { MESSAGE } = require('../libs/const');
const { Console } = require('@woowacourse/mission-utils');

class InputView {
  static readPlayerAnswer(callback) {
    Console.readLine(MESSAGE.INPUT_NUMBER, callback);
  }

  static readCommand(callback) {
    Console.readLine(MESSAGE.INPUT_OPTION, callback);
  }
}

module.exports = InputView;
