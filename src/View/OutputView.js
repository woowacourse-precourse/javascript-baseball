const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('../Utils/Constant');

const OutputView = {
  startView() {
    Console.print(MESSAGE.START);
  },

  resultCompare(ball, strike) {
    if (strike === 0) {
      Console.print(MESSAGE.NOTHING);
    } else if (ball === 0) {
      Console.print(MESSAGE.NO_BALL(strike));
    } else {
      Console.print(MESSAGE.RESULT(ball, strike));
    }
  },

  gameOverWithSuccess() {
    Console.print(MESSAGE.SUCCESS);
  },
};

module.exports = OutputView;

