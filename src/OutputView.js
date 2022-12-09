const { Console } = require('@woowacourse/mission-utils');
const MESSAGE = require('../constants/gameMessages');

const OutputView = {
  printStartGame () {
    Console.print(MESSAGE.GAME.START);
  },

  printCorrect () {
    Console.print(MESSAGE.GAME.SUCCESS);
    Console.print(MESSAGE.GAME.FINISH_OPTION);
  },

  printGameResultCount (result) {
    Console.print(result);
  },

  printGameFinish () {
    Console.print(MESSAGE.GAME.FINISH);
  },
};

module.exports = OutputView;
