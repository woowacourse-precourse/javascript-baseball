const { pickUniqueNumbersInRange } = require('../utils/utils');

class GameDataStore {
  #gameData;
  #gameDataUI;

  constructor() {
    this.#gameData = {
      target: [],
      ballsAndStrikes: {},
    };
    this.#gameDataUI = {};
  }

  initializeGameData() {
    this.#gameData = this.makeInitGameData();
    this.#gameDataUI.update(this.#gameData);
  }

  setInput(input) {
    this.#gameData.ballsAndStrikes = this.calcBallsAndStrikes(
      this.#gameData.target,
      input,
    );
    this.#gameDataUI.update(this.#gameData);
  }

  makeInitGameData() {
    const target = pickUniqueNumbersInRange(1, 9, 3).map(String);

    return {
      target,
      ballsAndStrikes: {},
    };
  }

  calcBallsAndStrikes(target, input) {
    const inputArray = Array.from(input);
    const initialValue = {
      balls: 0,
      strikes: 0,
    };

    return inputArray.reduce((acc, cur, idx) => {
      if (cur === target[idx]) {
        acc.strikes += 1;
        return acc;
      }

      if (target.includes(cur)) {
        acc.balls += 1;
        return acc;
      }

      return acc;
    }, initialValue);
  }

  injection(GameDataUI) {
    this.#gameDataUI = GameDataUI;
  }
}

module.exports = GameDataStore;
