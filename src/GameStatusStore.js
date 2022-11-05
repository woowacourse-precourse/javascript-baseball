class GameStatusStore {
  #gameStatus;

  #gameStatusUI;

  constructor() {
    this.#gameStatus = 'INIT';
    this.#gameStatusUI = {};
  }

  injection(GameStatusUI) {
    this.#gameStatusUI = GameStatusUI;
  }

  setGameStatus(newGameStatus) {
    this.#gameStatus = newGameStatus;
    this.#gameStatusUI.update(this.#gameStatus);
  }
}

module.exports = GameStatusStore;
