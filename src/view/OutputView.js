const { Console } = require('@woowacourse/mission-utils');
const { GAME_MESSAGE } = require('../constants');

const OutputView = {
  output(message) {
    Console.print(message);
  },

  renderGameStartCommand() {
    this.output(GAME_MESSAGE.game_start);
  },

  renderGameExecutionResult() {
    this.output(GAME_MESSAGE.game_result);
  },

  renderGameTrailResultCommand(trailResult) {
    this.output(trailResult);
  },

  renderGameWinnerCommand(gameWinner) {
    gameWinnerCommand = `${GAME_MESSAGE.game_winner} ${gameWinner}`;
    this.output(gameWinnerCommand);
  },
};

module.exports = OutputView;
