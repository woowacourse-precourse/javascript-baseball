class GameStatusStore {
  #gameStatus;
  #gameStatusUI;

  constructor() {
    this.#gameStatus = 'INIT';
    this.#gameStatusUI = {};
  }

  setGameStatus(newGameStatus) {
    this.#gameStatus = newGameStatus;
    this.#gameStatusUI.update(this.#gameStatus);
  }

  injection(GameStatusUI) {
    this.#gameStatusUI = GameStatusUI;
  }
}

module.exports = GameStatusStore;
