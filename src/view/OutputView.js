const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('../constants/Constants');

const OutputView = {
  printStart() {
    Console.print(MESSAGE.START);
  },

  printHintMessage(hintMessage) {
    Console.print(hintMessage);
  },

  printThreeStrike() {
    Console.print(MESSAGE.THREE_STRIKE);
  },
};

module.exports = OutputView;
