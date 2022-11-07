const { GAME_STATUS } = require('../utils/constants');

class GameStatusStore {
  #gameStatus;
  #gameStatusView;

  constructor() {
    this.#gameStatus = GAME_STATUS.INITIALIZED;
    this.#gameStatusView = {};
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

  injection(GameStatusView) {
    this.#gameStatusView = GameStatusView;
  }
}

module.exports = GameStatusStore;
