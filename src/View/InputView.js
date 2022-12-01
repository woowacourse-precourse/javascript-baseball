const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('../Utils/Constant');

const InputView = {
  readUserNumber(user, game) {
    Console.readLine(MESSAGE.INPUT_NUMBER, (number) => {
      user.setNumber(number);
      game.compareNumber();
    });
  },

  askRestartOrEnd(game) {
    Console.readLine(MESSAGE.RESTART_OR_NOT, (number) => {
      game.restartOrEnd(number);
    });
  },
};

module.exports = InputView;

