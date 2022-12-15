const { Console } = require('@woowacourse/mission-utils');
const { GAME_MESSAGE } = require('../constants');

const OutputView = {
  output(message) {
    Console.print(message);
  },

  renderGameStartCommand() {},

  renderGameTrailResultCommand() {},

  renderGameWinner() {},
};

module.exports = OutputView;
