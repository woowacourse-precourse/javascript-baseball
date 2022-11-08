const { Console } = require('@woowacourse/mission-utils');
const { ACTION_TYPE, GAME_STATUS, PRINT } = require('../utils/constants');

class GameStatusView {
  #dispatcher;

  constructor(Dispatcher) {
    this.#dispatcher = Dispatcher;
  }

  update(gameStatus) {
    switch (gameStatus) {
      case GAME_STATUS.STARTED:
        Console.print(PRINT.GAME_START);
        break;

      case GAME_STATUS.RESTARTED:
        this.#dispatcher.dispatch({ type: ACTION_TYPE.GAME_RESTART });
        break;

      case GAME_STATUS.FINISHED:
      default:
        Console.close();
        break;
    }
  }
}

module.exports = GameStatusView;
