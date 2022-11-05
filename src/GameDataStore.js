const utils = require('./utils');

class GameDataStore {
  #gameData;

  #gameDataUI;

  constructor() {
    this.#gameData = {
      target: [],
      input: '',
      ballsAndStrikes: {},
    };
    this.#gameDataUI = {};
  }

  injection(GameDataUI) {
    this.#gameDataUI = GameDataUI;
  }

  setTarget(newTarget) {
    this.#gameData = {
      target: newTarget,
      input: '',
      ballsAndStrikes: {},
    };
    this.#gameDataUI.update(this.#gameData);
  }

  setInput(newInput) {
    this.#gameData.input = newInput;
    this.#gameData.ballsAndStrikes = utils.getBallsAndStrikes(
      this.#gameData.target,
      this.#gameData.input,
    );
    this.#gameDataUI.update(this.#gameData);
  }
}

module.exports = GameDataStore;
