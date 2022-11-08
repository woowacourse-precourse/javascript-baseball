const { GAME_STATUS } = require('../utils/constants');

class GameStatusStore {
  #gameStatus;
  #gameStatusView;

  constructor(GameStatusView) {
    this.#gameStatus = GAME_STATUS.INITIALIZED;
    this.#gameStatusView = GameStatusView;
  }

  setGameStatus(newGameStatus) {
    this.gameStatusValidator(newGameStatus);

    this.#gameStatus = newGameStatus;
    this.#gameStatusView.update(this.#gameStatus);
  }

  gameStatusValidator(gameStatus) {
    if (gameStatus === GAME_STATUS.INITIALIZED) return;
    if (gameStatus === GAME_STATUS.STARTED) return;
    if (gameStatus === GAME_STATUS.RESTARTED) return;
    if (gameStatus === GAME_STATUS.FINISHED) return;
    throw new Error();
  }
}

module.exports = GameStatusStore;
