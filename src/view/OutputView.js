const { Console } = require('@woowacourse/mission-utils');
const { GAME_MESSAGE } = require('../constants');

const OutputView = {
  output(message) {
    Console.print(message);
  },

  renderGameStartCommand() {
    this.output(GAME_MESSAGE.game_start);
  },

  renderGameResult({ ballCount, strikeCount }) {
    if (ballCount === 0 && strikeCount === 0) {
      return this.output(RESULT.nothing);
    }

    const ballMessage = ballCount !== 0 ? `${ballCount}${RESULT.ball}` : '';
    const strikeMessage = strikeCount !== 0 ? `${strikeCount}${RESULT.strike}` : '';
    const gameMessage = `${ballMessage} ${strikeMessage}`;

    this.output(gameMessage);
  },

  renderGameEndCommand() {
    this.output(GAME_MESSAGE.ask_to_restart);
  },
};

module.exports = OutputView;
