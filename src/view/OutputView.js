const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('../constants/Constants');

const OutputView = {
  printStart() {
    Console.print(MESSAGE.START);
  },
};

module.exports = OutputView;
