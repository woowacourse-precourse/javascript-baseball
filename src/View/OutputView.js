const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('../Utils/Constant');

const OutputView = {
  startView() {
    Console.print(MESSAGE.START);
  },
};

module.exports = OutputView;

