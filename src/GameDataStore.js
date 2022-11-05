class GameDataStore {
  #gameData;

  #gameDataUI;

  constructor() {
    this.#gameData = {
      target: '',
      ballsAndStrikes: {},
    };
    this.#gameDataUI = {};
  }

  injection(GameDataUI) {
    this.#gameDataUI = GameDataUI;
  }

  setGameStatus(newGameData) {
    this.#gameData = newGameData;
    this.#gameDataUI.update(this.#gameData);
  }
}

module.exports = GameDataStore;
